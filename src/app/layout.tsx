import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import { cn } from "@/lib/utils";

import "./globals.css";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jira | Issue and project tracking software | Atlassian",
  description: "Jira | Issue and project tracking software | Atlassian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(inter.className, "antialiased min-h-screen")}
      >
        <QueryProvider>
          <Toaster />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
