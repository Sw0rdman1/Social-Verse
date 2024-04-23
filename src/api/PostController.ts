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

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    public async getPosts(page = 1, pageSize = 3): Promise<{ data: Post[], total: number }> {
        // try {
        //     let { data: posts, error } = await this.supabase
        //         .from('posts')
        //         .select('*, author:users(*)')
        //         .range((page - 1) * pageSize, page * pageSize - 1)
        //         .order('created_at', { ascending: false });


        //     const { count } = await this.supabase
        //         .from('posts')
        //         .select('*', { count: 'exact' });

        //     if (error) {
        //         console.log('Error fetching posts count:', error.message);
        //         throw error;
        //     }


        //     if (!count) {
        //         throw new Error('Error fetching posts count');
        //     }

        //     return {
        //         data: snakeToCamel(posts),
        //         total: count
        //     }

        // } catch (error) {
        //     console.error('Error fetching posts:', (error as Error).message);
        //     return { data: [], total: 0 };
        // }

        try {
            // Mocked posts data
            const mockedPosts: Post[] = [
                {
                    id: 1,
                    createdAt: new Date(),
                    numberOfBookmarks: 22,
                    numberOfComments: 3,
                    numberOfLikes: 144,
                    caption: "Sunset in Belgrade",
                    imageUrl: "https://media.istockphoto.com/id/1326144217/photo/temple-saint-sava.webp?b=1&s=170667a&w=0&k=20&c=wuD7CSblDj3HanDZP_lM73v-LiSSejNI2okat4-3PoA=",
                    author: {
                        id: 1,
                        displayName: "Bozidar Vujasinovic",
                        email: "vujasinovicb2019@gmail.com",
                        profilePicture: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                    }
                },
                {
                    id: 2,
                    createdAt: new Date(),
                    numberOfBookmarks: 7,
                    numberOfComments: 11,
                    numberOfLikes: 26,
                    caption: "What a beautiful city",
                    imageUrl: "https://media.architecturaldigest.com/photos/5d37554e47a77b000872bbf4/16:9/w_2560%2Cc_limit/GettyImages-847708760.jpg",
                    author: {
                        id: 1,
                        displayName: "Marko Petrovic",
                        email: "petrovicmarko@gmail.com",
                        profilePicture: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    }
                },
                {
                    id: 3,
                    createdAt: new Date(),
                    numberOfBookmarks: 22,
                    numberOfComments: 3,
                    numberOfLikes: 144,
                    caption: "Post 2",
                    imageUrl: "https://media.architecturaldigest.com/photos/5d37554e47a77b000872bbf4/16:9/w_2560%2Cc_limit/GettyImages-847708760.jpg",
                    author: {
                        id: 1,
                        displayName: "Marko Petrovic",
                        email: "petrovicmarko@gmail.com",
                        profilePicture: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    }
                }

            ];

            // Calculate the start and end index for pagination
            const startIndex = (page - 1) * pageSize;
            const endIndex = page * pageSize - 1;

            // Slice the mocked posts based on the pagination
            const paginatedPosts = mockedPosts.slice(startIndex, endIndex + 1);

            // Return the mocked posts and total count
            return {
                data: paginatedPosts,
                total: mockedPosts.length
            };
        } catch (error) {
            console.error('Error fetching posts:', (error as Error).message);
            return { data: [], total: 0 };
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
