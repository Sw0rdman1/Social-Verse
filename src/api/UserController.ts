import { SupabaseClient } from "@supabase/supabase-js";
import { User } from "../models/User";
import { snakeToCamel } from "../utils/caseConverter";

export class UserController {

    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    public async getCurrentUserInformations(id: string): Promise<User> {
        const { data, error } = await this.supabase
            .from('users')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.log(error.message);
            throw error;
        }



        return snakeToCamel(data) as User;
    }


}