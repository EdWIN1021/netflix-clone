"use client";

import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/database.types";
import React, {
  ReactNode,
  createContext,
  FC,
  useState,
  useEffect,
  useContext,
} from "react";
import { useRouter } from "next/navigation";

interface AuthContextProps {
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  currentUser: User | null | undefined;
}

const supabase = createClientComponentClient<Database>();

export const AuthContext = createContext<AuthContextProps>({
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
  currentUser: null,
});

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setCurrentUser(session?.user);
      },
    );

    return () => {
      authListener.subscription;
    };
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
      });

      if (user && !error) router.push("/signup/created");
      if (error) throw new Error(error?.message);
    } catch (err) {
      console.log(err);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (user && !error) router.push("/browse");
      if (error) throw new Error(error?.message);
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const contextValue: AuthContextProps = {
    signUp,
    signIn,
    signOut,
    currentUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
