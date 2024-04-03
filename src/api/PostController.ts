import { SupabaseClient } from "@supabase/supabase-js";
import { Post } from "../models/Post";

export class PostController {

    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    public async getAllPosts(page: number, pageSize: number): Promise<Post[]> {
        try {
            let { data: posts, error } = await this.supabase
                .from('posts')
                .select('*, author:users(*)')
                .range((page - 1) * pageSize, page * pageSize - 1);


            if (error) {
                console.log('Error fetching posts:', error.message);
                throw error;
            }

            return posts || [];
        } catch (error) {
            console.error('Error fetching posts:', (error as Error).message);
            return [];
        }
    }

    // Get a single post by ID
    public async getPostById(id: number): Promise<Post | null> {
        try {
            let { data: post, error } = await this.supabase
                .from('posts')
                .select('*, author:users(*)')
                .eq('id', 'id');

            if (error) {
                console.log('Error fetching post:', error.message);
                throw error;
            }



            return post ? post[0] : null;

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
