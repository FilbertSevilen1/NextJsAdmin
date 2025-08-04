// NO "use client" here

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/context/ToastContext";
import { AuthProvider } from "@/components/context/AuthContext";
import ClientLayout from "@/components/base/ClientLayout";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ToastProvider>
          <AuthProvider>
            <ClientLayout>{children}</ClientLayout>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
