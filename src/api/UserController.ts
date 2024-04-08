import { SupabaseClient } from "@supabase/supabase-js";

export class UserController {

    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    async getCurrentUserInformations() {
        const user = this.supabase.auth.getUser();
        console.log(user);
    }


}