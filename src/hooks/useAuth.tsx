import { useContext } from "react";
import { SupabaseContext } from "../context/SupabaseProvider";

export const useAuth = () => useContext(SupabaseContext);
