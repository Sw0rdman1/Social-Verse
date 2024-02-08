import { User, getFakeUser } from "./User";
import { faker } from "@faker-js/faker";

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
      content: faker.lorem.paragraph(),
      contentPhoto: faker.image.urlPicsumPhotos(),
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

