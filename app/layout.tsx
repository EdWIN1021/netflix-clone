import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import QueryProvider from "../providers/QueryProvider";
import AuthProvider from "@/providers/AuthProvider";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netflix",
  description: "netflix clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <QueryProvider>
          <body className={nunito.className}>{children}</body>
        </QueryProvider>
      </AuthProvider>
    </html>
  );
}
