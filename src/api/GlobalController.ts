import { SupabaseClient } from '@supabase/supabase-js';
import { PostController } from './PostController';
import { supabase } from '../config/supabase';
import { UserController } from './UserController';
import { LikeController } from './LikeController';
import { BookamarkController } from './BookmarkController';

class GlobalController {
    private static instance: GlobalController;
    private supabase: SupabaseClient;

    public posts: PostController;
    public users: UserController;
    public likes: LikeController;
    public bookmarks: BookamarkController;


    private constructor() {
        console.log("GlobalController created");
        this.supabase = supabase;
        this.posts = new PostController(this, this.supabase);
        this.users = new UserController(this.supabase);
        this.likes = new LikeController(this.supabase);
        this.bookmarks = new BookamarkController(this.supabase);
    }

    public static getInstance(): GlobalController {
        if (!GlobalController.instance) {
            GlobalController.instance = new GlobalController();
        }
        return GlobalController.instance;
    }


}

export default GlobalController;

