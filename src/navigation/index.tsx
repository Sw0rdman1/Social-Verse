import { useAuth } from "../hooks/useAuth";
import AuthStack from "./authStack";
import UserStack from "./userStack";

export default function RootNavigation() {
  const { user, initialized } = useAuth();

  // Ovde ide load data funkcija i provera u  returnu

  if (!initialized) return null;

  return user ? <UserStack /> : <AuthStack />;
}
