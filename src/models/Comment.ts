import { User } from "./User";

export default interface Comment {
    id: string;
    postId: string;
    text: string;
    author: User;
    createdAt: Date;
    numberOfLikes: number;
    liked: boolean;
}