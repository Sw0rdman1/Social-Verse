import { User } from "./User";
import { faker } from "@faker-js/faker";

export default interface Comment {
    id: string;
    postID: string;
    text: string;
    author: User;
    createdAt: Date;
    numberOfLikes: number;
    liked: boolean;
}

export const getFakeComments = (postID: string): Comment[] => {
    const fakeComments: Comment[] = [];

    for (let i = 0; i < 3; i++) {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();

        const fakeComment: Comment = {
            id: `comment-${i}`,
            postID: postID,
            text: faker.lorem.paragraph(),
            author: {
                id: i,
                displayName: randomName,
                email: randomEmail,
                profilePicture: `https://picsum.photos/100/300`,
            },
            createdAt: new Date(),
            numberOfLikes: faker.number.int({ min: 0, max: 300 }),
            liked: faker.datatype.boolean(),
        };
        fakeComments.push(fakeComment);
    }
    return fakeComments;
}
