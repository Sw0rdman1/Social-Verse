import { SupabaseClient } from "@supabase/supabase-js";
import { Post } from "../models/Post";
import GlobalController from "./GlobalController";
import { snakeToCamel } from "../utils/caseConverter";
import { ImagePickerAsset } from "expo-image-picker";
import * as FileSystem from 'expo-file-system';
import { decode } from 'base64-arraybuffer';

const EXPIRES_IN = 365 * 24 * 60 * 60;

export class PostController {

    private supabase: SupabaseClient;
    private global: GlobalController;

    constructor(global: GlobalController, supabase: SupabaseClient) {
        this.supabase = supabase;
        this.global = global;
    }

    public async getPosts(userID: number, page = 1, pageSize = 10): Promise<Post[]> {
        try {
            let { data, error } = await this.supabase
                .from('posts')
                .select('*, author:users(*)')
                .range((page - 1) * pageSize, page * pageSize - 1);


            if (error) {
                console.log('Error fetching posts:', error.message);
                throw error;
            }

            let posts = snakeToCamel(data);

            return posts;
        } catch (error) {
            console.error('Error fetching posts:', (error as Error).message);
            return [];
        }
    }

    public async getPostById(id: number, userID: number): Promise<Post | null> {
        try {
            let { data, error } = await this.supabase
                .from('posts')
                .select('*, author:users(*)')
                .eq('id', id)
                .limit(1)
                .single();

            if (error) {
                throw error;
            }

            if (!data) {
                throw new Error('Post not found');
            }

            let post = data as Post;
            post.numberOfLikes = await this.global.likes.getLikesForPost(id);
            post.liked = await this.global.likes.isPostLikedByUser(id, userID);

            console.log('Post:', post);

            return post;

        } catch (error) {
            console.error('Error fetching post:', (error as Error).message);
            return null;
        }
    }

    // Create a new post
    public async createPost(caption: string, image: ImagePickerAsset, categories: number[], authorID: number): Promise<void> {
        try {

            const base64 = await FileSystem.readAsStringAsync(image.uri, { encoding: 'base64' });
            const filePath = `${authorID}/${new Date().getTime()}.${image.type === 'image' ? 'png' : 'mp4'}`;
            const contentType = image.type === 'image' ? 'image/png' : 'video/mp4';

            const { data: uploadedImage } = await this.supabase.storage
                .from('posts')
                .upload(filePath, decode(base64), { contentType });


            const { data: imageURL } = await this.supabase
                .storage
                .from('posts')
                .createSignedUrl(uploadedImage?.path as string, EXPIRES_IN);


            let { data, error } = await this.supabase
                .from('posts')
                .insert({
                    created_at: new Date(),
                    caption: caption,
                    imageUrl: imageURL?.signedUrl,
                    author: authorID,
                });


            if (error) {
                throw error;
            }


            console.log('Post created:', data);

        } catch (error) {
            console.error('Error creating post:', (error as Error).message);
        }


    }

    // Update an existing post
    public async updatePost(): Promise<void> {

    }

    // Delete a post
    public async deletePost(): Promise<void> {

    }
}
