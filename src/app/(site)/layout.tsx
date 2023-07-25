import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link Sharing",
  description: "Make your own link sharing page",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="sm:h-[calc(100vh-140px)]">{children}</div>
    </>
  );
}
