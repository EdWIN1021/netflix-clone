import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import QueryProvider from "../providers/QueryProvider";
import AuthProvider from "@/providers/AuthProvider";
import "react-loading-skeleton/dist/skeleton.css";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <AuthProvider>
          <QueryProvider>{children}</QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
