import React from "react";
import { User } from "../../models/User";
import { Image } from "expo-image";

interface AvatarProps {
  user: User;
  size: number;
}

const Avatar: React.FC<AvatarProps> = ({ user, size }) => {
  return (
    <Image
      source={{
        uri: user.profilePicture,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: 50,
      }}
    />
  );
};

export default Avatar;
