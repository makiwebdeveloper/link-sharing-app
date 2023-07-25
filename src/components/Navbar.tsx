import Link from "next/link";
import Button, { buttonVariants } from "./ui/Button";
import { Share2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white rounded-lg p-5 flex items-center justify-between">
      <Link
        href="/"
        className="text-3xl font-bold transition duration-300 hover:text-violet-500"
      >
        devlinks
      </Link>
      <div className="flex gap-5">
        <Button variant="ghost" className="flex items-center gap-2">
          <Share2 className="w-4 h-4" /> Share
        </Button>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Preview
        </Link>
      </div>
    </nav>
  );
}
