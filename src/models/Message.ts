import { faker } from "@faker-js/faker";

export default interface Message {
    id: string;
    chatId: string;
    text: string;
    date: Date;
    senderId: string;
    read: boolean;
}



export const returnRandomMessages = (userID: string): Message[] => {
    const messages: Message[] = [];
    for (let i = 0; i < 15; i++) {
        messages.push({
            id: `message-${i}`,
            chatId: `chat-${i}`,
            text: faker.lorem.sentence(),
            date: faker.date.recent(),
            senderId: i % 2 === 0 ? userID : "u2",
            read: false,
        });
    }
    return messages.sort((a, b) => a.date.getTime() - b.date.getTime());
}