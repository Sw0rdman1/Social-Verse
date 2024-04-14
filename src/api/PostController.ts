import { SupabaseClient } from "@supabase/supabase-js";
import { Post } from "../models/Post";
import GlobalController from "./GlobalController";
import { snakeToCamel } from "../utils/caseConverter";

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

            for (let post of posts) {
                post.numberOfLikes = await this.global.likes.getLikesForPost(post.id);
                post.liked = await this.global.likes.isPostLikedByUser(post.id, userID);
            }

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
    public async createPost(): Promise<void> {


    }

    // Update an existing post
    public async updatePost(): Promise<void> {

    }

    // Delete a post
    public async deletePost(): Promise<void> {

    }
}
