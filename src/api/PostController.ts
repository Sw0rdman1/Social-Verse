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

    public async getPosts(page = 1, pageSize = 3): Promise<{ data: Post[], total: number }> {
        try {
            let { data: posts, error } = await this.supabase
                .from('posts')
                .select('*, author:users(*)')
                .range((page - 1) * pageSize, page * pageSize - 1)
                .order('created_at', { ascending: false });


            const { count } = await this.supabase
                .from('posts')
                .select('*', { count: 'exact' });

            if (error) {
                console.log('Error fetching posts count:', error.message);
                throw error;
            }


            if (!count) {
                throw new Error('Error fetching posts count');
            }

            return {
                data: snakeToCamel(posts),
                total: count
            }

        } catch (error) {
            console.error('Error fetching posts:', (error as Error).message);
            return { data: [], total: 0 };
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
    public async createPost(caption: string, imageURL: string, authorID: number): Promise<void> {
        try {

            let { data, error } = await this.supabase
                .from('posts')
                .insert({
                    created_at: new Date(),
                    caption: caption,
                    imageUrl: imageURL,
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
