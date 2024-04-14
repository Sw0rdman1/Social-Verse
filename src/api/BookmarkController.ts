import { SupabaseClient } from "@supabase/supabase-js";
import { Post } from "../models/Post";

export class BookamarkController {

    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }


    public async bookmarkPost(postId: number, userId: number): Promise<void> {
        try {
            let { data: bookmark, error } = await this.supabase
                .from('bookmarks')
                .insert({ post_id: postId, user_id: userId });

            if (error) {
                console.log('Error liking post:', error.message);
                throw error;
            }

        } catch (error) {
            console.error('Error liking post:', (error as Error).message);
        }
    }


    public async unbookmarkPost(postId: number, userId: number): Promise<void> {
        try {
            let { error } = await this.supabase
                .from('bookmarks')
                .delete()
                .eq('post_id', postId)
                .eq('user_id', userId);

            if (error) {
                console.log('Error unliking post:', error.message);
                throw error;
            }

        } catch (error) {
            console.error('Error unliking post:', (error as Error).message);
        }
    }


    public async getBookmarksForPost(postId: number): Promise<number> {

        try {
            let { data: bookmarks, error } = await this.supabase
                .from('bookmarks')
                .select('id')
                .eq('post_id', postId);

            if (error) {
                console.log('Error fetching bookmarks:', error.message);
                throw error;
            }

            return bookmarks?.length || 0;

        } catch (error) {
            console.error('Error fetching bookmarks:', (error as Error).message);
            return 0;
        }
    }


    public async isPostBookmarkedByUser(postId: number, userId: number): Promise<boolean> {
        try {
            let { data: bookmarks, error } = await this.supabase
                .from('bookmarks')
                .select('id')
                .eq('post_id', postId)
                .eq('user_id', userId);

            if (error) {
                console.log('Error fetching bookmarks:', error.message);
                throw error;
            }

            if (!bookmarks) {
                return false;
            }

            return bookmarks?.length > 0;

        } catch (error) {
            console.error('Error fetching bookmarks:', (error as Error).message);
            return false;
        }
    }






}
