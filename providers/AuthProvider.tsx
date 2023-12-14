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
} from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

interface CustomError extends Error {
  message: string;
}

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
        if (event === "SIGNED_IN") {
          setCurrentUser(session?.user);
          router.push("/browse");
        }

        if (event === "SIGNED_OUT") {
          router.push("/");
        }
      },
    );

    return () => {
      authListener.subscription;
    };
  }, [router]);

  const signUp = async (email: string, password: string) => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
      });

      if (user && !error) {
        toast.success("Congratulations! You have successfully signed up.");
      }
      if (error) {
        throw new Error(error?.message);
      }
    } catch (err) {
      const message = (err as CustomError).message;
      toast.error(message);
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

      if (user && !error) {
        toast.success("Welcome! You have successfully logged in.");
      }
      if (error) throw new Error(error?.message);
    } catch (err) {
      const message = (err as CustomError).message;
      toast.error(message);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
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
