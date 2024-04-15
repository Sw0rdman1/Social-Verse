import Chat from "../models/Chat";
import { Post } from "../models/Post";

export const sortByLastMessageDate = (chats: Chat[]): Chat[] => {
    return chats.sort((a, b) => {
        if (a.lastMessageDate instanceof Date && b.lastMessageDate instanceof Date) {
            return b.lastMessageDate.getTime() - a.lastMessageDate.getTime();
        }
        return 0;
    });
}

export const sortByCreatedAt = (posts: Post[]): Post[] => {
    return posts.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
}