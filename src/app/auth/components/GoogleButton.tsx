"use client";

import Icons from "@/components/Icons";
import Button from "@/components/ui/Button";
import { signIn } from "next-auth/react";

export default function GoogleButton() {
  const loginWithGoogle = async () => {
    try {
      signIn("google", {
        callbackUrl: "/",
      });
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  return (
    <Button
      variant="custom"
      className="gap-2 bg-white text-black/80 hover:bg-violet-500/10"
      onClick={loginWithGoogle}
    >
      <Icons.google className="w-6 h-6" /> Continue with Google
    </Button>
  );
}
