import { SupabaseClient } from "@supabase/supabase-js";

export class UserController {

    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    // Get all users
    async getAllUsers() {
        console.log("Getting all users...");
    }
    // Get a single user by ID
    async getUserById() {
    }
    // Create a new user
    async createUser() {
    }
    // Update an existing user
    async updateUser() {
    }
    // Delete a user
    async deleteUser() {
    }
}