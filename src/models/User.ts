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

export const BOZA_URL = "https://rfbvbbnkgaplbwzfumul.supabase.co/storage/v1/object/sign/avatars/WhatsApp%20Image%202024-02-07%20at%2000.19.24.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1doYXRzQXBwIEltYWdlIDIwMjQtMDItMDcgYXQgMDAuMTkuMjQuanBlZyIsImlhdCI6MTcwNzI2MTU4OSwiZXhwIjoxNzM4Nzk3NTg5fQ.64bbVLqECpU1OLoimrE3bdVlVxQI0Yp2gsc_A9tqWOA&t=2024-02-06T23%3A19%3A49.572Z"
const URLTASA = "https://rfbvbbnkgaplbwzfumul.supabase.co/storage/v1/object/sign/avatars/WhatsApp%20Image%202024-02-08%20at%2023.21.28.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1doYXRzQXBwIEltYWdlIDIwMjQtMDItMDggYXQgMjMuMjEuMjguanBlZyIsImlhdCI6MTcwNzQzMDkyNywiZXhwIjoxNzM4OTY2OTI3fQ.xLi-XWq--oRB-0lBAxNo53DNRLoNVdjFwaPVPdKSVMs&t=2024-02-08T22%3A22%3A07.552Z"

const NAME = "Bozidar Vujanovic";
const EMAIL = "vujasinovicb2019@gmail.com"

export const getFakeUsers = (): User[] => {
  const fakeUsers: User[] = [];

  for (let i = 0; i < 10; i++) {
    const randomName = faker.person.fullName(); // Rowan Nikolaus
    const randomEmail = faker.internet.email();

    const fakeUser: User = {
      id: i,
      displayName: i === 7 ? NAME : randomName,
      email: i === 7 ? EMAIL : randomEmail,
      profilePicture: i === 7 ? BOZA_URL : faker.image.avatar(),
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

  fakeUsers.push({
    id: 11,
    displayName: "Tamara Krstic",
    email: "krstictamara@gmail.com",
    profilePicture: URLTASA,
    numberOfFollowers: faker.number.int({ min: 0, max: 500 }),
    numberOfFollowing: faker.number.int({ min: 0, max: 500 }),
    numberOfPosts: faker.number.int({ min: 0, max: 60 }),
    isFollowing: faker.datatype.boolean(),
  });

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

export const getCurrentUser = (): User => {
  return {
    id: 0,
    displayName: NAME,
    email: EMAIL,
    profilePicture: BOZA_URL,
    numberOfFollowers: faker.number.int({ min: 0, max: 500 }),
    numberOfFollowing: faker.number.int({ min: 0, max: 500 }),
    numberOfPosts: faker.number.int({ min: 0, max: 60 }),
    isFollowing: faker.datatype.boolean(),
  };
};

export const getOnlineUsers = (): User[] => {
  return getFakeUsers().slice(0, 5);
}
