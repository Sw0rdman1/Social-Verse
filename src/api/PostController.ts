import { SupabaseClient } from "@supabase/supabase-js";

export class PostController {

    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    // Get all posts
    public async getAllPosts(): Promise<void> {
        console.log("Getting all posts...");

    }

    // Get a single post by ID
    public async getPostById(): Promise<void> {

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
