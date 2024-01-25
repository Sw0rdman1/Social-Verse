import { faker } from "@faker-js/faker";

export interface User {
  id: number;
  displayName: string;
  email: string;
  profilePicture: string;
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
    };
    fakeUsers.push(fakeUser);
  }
  return fakeUsers;
}

export const getFakeUser = (): User => {
  const randomName = faker.person.fullName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email();

  const fakeUser: User = {
    id: 0,
    displayName: randomName,
    email: randomEmail,
    profilePicture: faker.image.avatar(),
  };
  return fakeUser;
}