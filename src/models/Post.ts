import { User, getFakeUser } from "./User";
import { faker } from "@faker-js/faker";

const BEBE = "https://rfbvbbnkgaplbwzfumul.supabase.co/storage/v1/object/sign/avatars/WhatsApp%20Image%202024-02-08%20at%2023.20.31.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1doYXRzQXBwIEltYWdlIDIwMjQtMDItMDggYXQgMjMuMjAuMzEuanBlZyIsImlhdCI6MTcwNzQzMDk2MCwiZXhwIjoxNzM4OTY2OTYwfQ.0jH9R_-S6x9-FEpCw0YGiJxxKlpa3ap5BzicwtZ0yh8&t=2024-02-08T22%3A22%3A40.669Z"

export interface Post {
  id: string;
  content: string;
  contentPhoto: string;
  author: User;
  createdAt: Date | string;
  numberOfLikes: number;
  numberOfComments: number;
  numberOfBookmarks: number;
  liked: boolean;
  bookmarked: boolean;
  newPost?: boolean;
}

export const getFakePosts = (): Post[] => {
  const fakePosts: Post[] = [];

  for (let i = 0; i < 10; i++) {
    const randomName = faker.person.fullName(); // Rowan Nikolaus
    const randomEmail = faker.internet.email();

    const fakePost: Post = {
      id: `post-${i}`,
      content: faker.lorem.paragraph(),
      contentPhoto: faker.image.urlPicsumPhotos(),
      author: getFakeUser(),
      createdAt: new Date(),
      numberOfLikes: faker.number.int({ min: 0, max: 300 }),
      numberOfComments: 0,
      numberOfBookmarks: faker.number.int({ min: 0, max: 100 }),
      liked: faker.datatype.boolean(),
      bookmarked: faker.datatype.boolean(),
    };
    fakePosts.push(fakePost);
  }
  return fakePosts;
};

export const getUserFakePosts = (user: User): Post[] => {
  const fakePosts: Post[] = [];

  for (let i = 0; i < 5; i++) {
    const fakePost: Post = {
      id: `postss-${i}`,
      content: i === 3 ? "Happy New Year!!!" : faker.lorem.paragraph(),
      contentPhoto: i === 3 ? BEBE : faker.image.urlPicsumPhotos(),
      author: user,
      createdAt: new Date(),
      numberOfLikes: faker.number.int({ min: 0, max: 300 }),
      numberOfComments: 0,
      numberOfBookmarks: faker.number.int({ min: 0, max: 100 }),
      liked: faker.datatype.boolean(),
      bookmarked: faker.datatype.boolean(),
    };
    fakePosts.push(fakePost);
  }
  return fakePosts;
};

