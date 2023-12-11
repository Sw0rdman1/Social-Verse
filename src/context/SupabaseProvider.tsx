import { Session, User } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";
// import * as AppleAuthentication from "expo-apple-authentication";
import { supabase } from "../config/supabase";
import * as AppleAuthentication from "expo-apple-authentication";

type SupabaseContextProps = {
  user: User | null;
  session: Session | null;
  initialized?: boolean;
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
  signUp: async () => {},
  signInWithPassword: async () => {},
  signInWithApple: async () => {},
  signOut: async () => {},
});

export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

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
        console.log(JSON.stringify({ error, user }, null, 2));
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
      setUser(session ? session.user : null);
      setInitialized(true);
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
