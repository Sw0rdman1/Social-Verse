import { SupabaseClient } from '@supabase/supabase-js';
import { PostController } from './PostController';
import { supabase } from '../config/supabase';

class GlobalController {
    private static instance: GlobalController;
    public posts: PostController;
    private supabase: SupabaseClient;

    private constructor() {
        console.log("GlobalController created");
        this.supabase = supabase;
        this.posts = new PostController(this.supabase);
    }

    public static getInstance(): GlobalController {
        if (!GlobalController.instance) {
            GlobalController.instance = new GlobalController();
        }
        return GlobalController.instance;
    }

}

export default GlobalController;

