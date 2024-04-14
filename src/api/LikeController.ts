import { SupabaseClient } from "@supabase/supabase-js";
import { Post } from "../models/Post";

export class LikeController {

    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }


    public async likePost(postId: number, userId: number): Promise<void> {
        try {
            let { data: like, error } = await this.supabase
                .from('likes')
                .insert({ post_id: postId, user_id: userId });

            if (error) {
                console.log('Error liking post:', error.message);
                throw error;
            }

        } catch (error) {
            console.error('Error liking post:', (error as Error).message);
        }
    }


    public async unlikePost(postId: number, userId: number): Promise<void> {
        try {
            let { error } = await this.supabase
                .from('likes')
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


    public async getLikesForPost(postId: number): Promise<number> {

        try {
            let { data: likes, error } = await this.supabase
                .from('likes')
                .select('id')
                .eq('post_id', postId);

            if (error) {
                console.log('Error fetching likes:', error.message);
                throw error;
            }

            return likes?.length || 0;

        } catch (error) {
            console.error('Error fetching likes:', (error as Error).message);
            return 0;
        }
    }


    public async isPostLikedByUser(postId: number, userId: number): Promise<boolean> {
        try {
            let { data: likes, error } = await this.supabase
                .from('likes')
                .select('id')
                .eq('post_id', postId)
                .eq('user_id', userId);

            if (error) {
                console.log('Error fetching likes:', error.message);
                throw error;
            }

            if (!likes) {
                return false;
            }

            return likes?.length > 0;

        } catch (error) {
            console.error('Error fetching likes:', (error as Error).message);
            return false;
        }
    }






}
