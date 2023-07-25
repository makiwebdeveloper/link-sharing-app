import Link from "next/link";
import Button, { buttonVariants } from "./ui/Button";
import { Eye, Share2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white rounded-lg p-5 flex items-center justify-between">
      <Link
        href="/"
        className="text-3xl font-bold transition duration-300 hover:text-violet-500"
      >
        devlinks
      </Link>
      <div className="flex gap-2 sm:gap-5">
        <Button
          variant="ghost"
          className="flex items-center gap-2 sm:h-auto sm:px-4"
        >
          <Share2 className="w-4 h-4" />{" "}
          <span className="hidden sm:block">Share</span>
        </Button>
        <Link
          href="/"
          className={buttonVariants({
            variant: "outline",
            className: "h-10 px-3 sm:h-auto sm:px-4",
          })}
        >
          <Eye className="sm:hidden w-4 h-4" />{" "}
          <span className="hidden sm:block">Result</span>
        </Link>
      </div>
    </nav>
  );
}
