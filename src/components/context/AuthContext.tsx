"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";

interface User {
  user_id: number;
  user_name: string;
  user_email: string;
  user_address: string;
  user_phone_number: string;
  user_status: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState<User | null>(null);

  const [user, setUser] = useState<User | null>({
    user_id: 0,
    user_name: "string",
    user_email: "string",
    user_address: "string",
    user_phone_number: "string",
    user_status: "string"
  });
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  // Load user from cookies on mount
  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      setUser(JSON.parse(userCookie));
    }
    setLoading(false);
  }, []);

  // Redirect logged-in users away from /login and /register
  useEffect(() => {
    if (user && (pathname === "/" || pathname === "/forget-password")) {
      router.push("/dashboard"); // Redirect to home or another page
    }
  }, [user, pathname, router]);

  // Restrict access to /cart/** and /orders/**
  useEffect(() => {
    if (
      !loading &&
      !user &&
      (!pathname.startsWith("/") || !pathname.startsWith("/forget-password"))
    ) {
      router.push("/");
    }
  }, [user, pathname, loading, router]);

  const login = (userData: User) => {
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData), {
      expires: 1, // Expires in 1 day
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });
    router.push("/"); // Redirect to home
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
