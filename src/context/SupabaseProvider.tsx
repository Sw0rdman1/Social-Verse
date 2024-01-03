import { Session, User } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";
// import * as AppleAuthentication from "expo-apple-authentication";
import { supabase } from "../config/supabase";
import * as AppleAuthentication from "expo-apple-authentication";
import { getFakePosts } from "../models/Post";

type SupabaseContextProps = {
  user: User | null;
  session: Session | null;
  initialized?: boolean;
  loadingData?: boolean;
  posts: any[];
  signUp: (email: string, password: string) => Promise<void>;
  signInWithPassword: (email: string, password: string) => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOut: () => Promise<void>;
};

type SupabaseProviderProps = {
  children: React.ReactNode;
};

export const SupabaseContext = createContext<SupabaseContextProps>({
  user: null,
  session: null,
  initialized: false,
  loadingData: false,
  posts: [],
  signUp: async () => {},
  signInWithPassword: async () => {},
  signInWithApple: async () => {},
  signOut: async () => {},
});

export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [posts, setPosts] = useState<any[]>([]);

  const signUp = async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw error;
    }
  };

  const signInWithPassword = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
  };

  const signInWithApple = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      // Sign in via Supabase Auth.
      if (credential.identityToken) {
        const {
          error,
          data: { user },
        } = await supabase.auth.signInWithIdToken({
          provider: "apple",
          token: credential.identityToken,
        });
        if (!error) {
          // User is signed in.
        }
      } else {
        throw new Error("No identityToken.");
      }
    } catch (e: any) {
      if (e.code === "ERR_REQUEST_CANCELED") {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  };

  useEffect(() => {
    // Listen for changes to authentication state
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setInitialized(true);

      console.log(session?.user);

      if (session?.user) {
        setLoadingData(true);
        setUser(session.user);
        setTimeout(() => {
          const posts = getFakePosts();
          setPosts(posts);
          setLoadingData(false);
        }, 2000);
      } else {
        setUser(null);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <SupabaseContext.Provider
      value={{
        user,
        session,
        initialized,
        loadingData,
        posts,
        signUp,
        signInWithPassword,
        signInWithApple,
        signOut,
      }}
    >
      {children}
    </SupabaseContext.Provider>
  );
};
