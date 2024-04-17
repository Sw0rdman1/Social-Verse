import { SupabaseClient } from '@supabase/supabase-js';
import { PostController } from './PostController';
import { supabase } from '../config/supabase';
import { UserController } from './UserController';
import { LikeController } from './LikeController';
import { BookamarkController } from './BookmarkController';
import { ImageController } from './ImagesController';
import { CommentController } from './CommentsController';

class GlobalController {
    private static instance: GlobalController;
    private supabase: SupabaseClient;

    public images: ImageController;
    public posts: PostController;
    public users: UserController;
    public likes: LikeController;
    public bookmarks: BookamarkController;
    public comments: CommentController;


    private constructor() {
        console.log("GlobalController created");
        this.supabase = supabase;

        this.images = new ImageController(this.supabase);
        this.posts = new PostController(this.supabase);
        this.users = new UserController(this.supabase);
        this.likes = new LikeController(this.supabase);
        this.bookmarks = new BookamarkController(this.supabase);
        this.comments = new CommentController(this.supabase);
    }

    public static getInstance(): GlobalController {
        if (!GlobalController.instance) {
            GlobalController.instance = new GlobalController();
        }
        return GlobalController.instance;
    }


}

export default GlobalController;

