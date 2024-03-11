import { User, getFakeUser } from "./User";
import { faker } from "@faker-js/faker";

export default interface Chat {
    id: string;
    user: User;
    lastMessage: string;
    lastMessageDate: Date;
    unreadMessages: number;
}
export const BOZA_URL = "https://rfbvbbnkgaplbwzfumul.supabase.co/storage/v1/object/sign/avatars/WhatsApp%20Image%202024-02-07%20at%2000.19.24.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1doYXRzQXBwIEltYWdlIDIwMjQtMDItMDcgYXQgMDAuMTkuMjQuanBlZyIsImlhdCI6MTcwNzI2MTU4OSwiZXhwIjoxNzM4Nzk3NTg5fQ.64bbVLqECpU1OLoimrE3bdVlVxQI0Yp2gsc_A9tqWOA&t=2024-02-06T23%3A19%3A49.572Z"
const URLTASA = "https://rfbvbbnkgaplbwzfumul.supabase.co/storage/v1/object/sign/avatars/WhatsApp%20Image%202024-02-08%20at%2023.21.28.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1doYXRzQXBwIEltYWdlIDIwMjQtMDItMDggYXQgMjMuMjEuMjguanBlZyIsImlhdCI6MTcwNzQzMDkyNywiZXhwIjoxNzM4OTY2OTI3fQ.xLi-XWq--oRB-0lBAxNo53DNRLoNVdjFwaPVPdKSVMs&t=2024-02-08T22%3A22%3A07.552Z"

const NAME = "Bozidar Vujanovic";
const EMAIL = "vujasinovicb2019@gmail.com"

export const useFakeChats = (): Chat[] => {
    const fakeChats: Chat[] = [];

    for (let i = 0; i < 10; i++) {
        const fakeChat: Chat = {
            id: `chat-${i}`,
            lastMessage: faker.lorem.sentence(),
            lastMessageDate: faker.date.recent(),
            unreadMessages: faker.number.int({ min: 0, max: 10 }),
            user: getFakeUser(),
        };
        fakeChats.push(fakeChat);
    }

    return fakeChats;
};