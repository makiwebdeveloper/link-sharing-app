import { cn } from "@/lib/cn";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("h-screen bg-slate-100 p-5", inter.className)}>
        {children}
      </body>
    </html>
  );
}
