import { faker } from "@faker-js/faker";

export interface User {
  id: number;
  displayName: string;
  email: string;
  profilePicture: string;
  backgroundImage?: string;
  numberOfFollowers: number;
  numberOfFollowing: number;
  numberOfPosts: number;
  isFollowing: boolean;
}

export const getFakeUsers = (): User[] => {
  const fakeUsers: User[] = [];

  for (let i = 0; i < 10; i++) {
    const randomName = faker.person.fullName(); // Rowan Nikolaus
    const randomEmail = faker.internet.email();

    const fakeUser: User = {
      id: i,
      displayName: randomName,
      email: randomEmail,
      profilePicture: faker.image.avatar(),
      backgroundImage: faker.image.urlPicsumPhotos({
        width: 1080,
        height: 500,
      }),
      numberOfFollowers: faker.number.int({ min: 0, max: 500 }),
      numberOfFollowing: faker.number.int({ min: 0, max: 500 }),
      numberOfPosts: faker.number.int({ min: 0, max: 60 }),
      isFollowing: faker.datatype.boolean(),
    };
    fakeUsers.push(fakeUser);
  }
  return fakeUsers;
};

export const getFakeUser = (): User => {
  const randomName = faker.person.fullName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email();

  const fakeUser: User = {
    id: 0,
    displayName: randomName,
    email: randomEmail,
    profilePicture: faker.image.avatar(),
    numberOfFollowers: faker.number.int({ min: 0, max: 500 }),
    numberOfFollowing: faker.number.int({ min: 0, max: 500 }),
    numberOfPosts: faker.number.int({ min: 0, max: 60 }),
    isFollowing: faker.datatype.boolean(),
  };
  return fakeUser;
};
