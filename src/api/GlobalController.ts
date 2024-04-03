import { SupabaseClient, User } from '@supabase/supabase-js';
import { PostController } from './PostController';
import { supabase } from '../config/supabase';
import { UserController } from './UserController';

class GlobalController {
    private static instance: GlobalController;
    private supabase: SupabaseClient;

    public posts: PostController;
    public users: UserController;

    private constructor() {
        console.log("GlobalController created");
        this.supabase = supabase;
        this.posts = new PostController(this.supabase);
        this.users = new UserController(this.supabase);
    }

    public static getInstance(): GlobalController {
        if (!GlobalController.instance) {
            GlobalController.instance = new GlobalController();
        }
        return GlobalController.instance;
    }

}

export default GlobalController;

