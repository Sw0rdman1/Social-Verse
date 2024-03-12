import Chat from "../models/Chat";

export const sortByLastMessageDate = (chats: Chat[]): Chat[] => {
    return chats.sort((a, b) => {
        if (a.lastMessageDate instanceof Date && b.lastMessageDate instanceof Date) {
            return b.lastMessageDate.getTime() - a.lastMessageDate.getTime();
        }
        return 0;
    });
}