import Navbar from "@/components/Navbar";
import { cn } from "@/lib/cn";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link Sharing",
  description: "Make your own link sharing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("h-screen bg-slate-100 p-5", inter.className)}>
        <Navbar />
        <div className="h-[calc(100vh-140px)]">{children}</div>
      </body>
    </html>
  );
}
