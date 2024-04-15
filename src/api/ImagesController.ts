import { SupabaseClient } from "@supabase/supabase-js";
import * as FileSystem from 'expo-file-system';
import { decode } from 'base64-arraybuffer';
import { ImagePickerAsset } from "expo-image-picker";

const EXPIRES_IN = 365 * 24 * 60 * 60;

export class ImageController {

    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    public async uploadImage(image: ImagePickerAsset, userID: number, collection: string): Promise<string> {
        try {
            const base64 = await FileSystem.readAsStringAsync(image.uri, { encoding: 'base64' });
            const filePath = `${userID}/${new Date().getTime()}.${image.type === 'image' ? 'png' : 'mp4'}`;
            const contentType = image.type === 'image' ? 'image/png' : 'video/mp4';

            const { data: uploadedImage } = await this.supabase.storage
                .from(collection)
                .upload(filePath, decode(base64), { contentType });


            const { data: imageURL } = await this.supabase
                .storage
                .from(collection)
                .createSignedUrl(uploadedImage?.path as string, EXPIRES_IN);

            return imageURL?.signedUrl as string;
        } catch (error) {
            console.error('Error uploading image:', (error as Error).message);
            return '';
        }
    }





}
