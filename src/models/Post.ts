import { User } from "./Use";
import { faker } from "@faker-js/faker";

export interface Post {
  id: string;
  content: string;
  contentPhoto: string;
  author: User;
  createdAt: Date;
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
      content: `Fake post ${i}`,
      contentPhoto: faker.image.urlPicsumPhotos(),
      author: {
        id: i,
        displayName: randomName,
        email: randomEmail,
        profilePicture: `https://picsum.photos/100/300`,
      },
      createdAt: new Date(),
      numberOfLikes: 0,
      numberOfComments: 0,
      numberOfBookmarks: 0,
      liked: false,
      bookmarked: false,
    };
    fakePosts.push(fakePost);
  }
  return fakePosts;
};
