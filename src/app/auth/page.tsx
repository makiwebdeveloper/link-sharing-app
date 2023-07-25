import { getAuthSession } from "@/lib/auth";
import GoogleButton from "./components/GoogleButton";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Auth",
  description: "Sign in to Link Sharing App",
};

export default async function Auth() {
  const session = await getAuthSession();

  console.log(session);

  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="h-full flex items-center justify-center">
      <section className="flex flex-col gap-5 items-center">
        <h1 className="text-2xl text-center font-semibold text-black/80">
          Sign in to
          <br />
          <span className="text-6xl text-violet-500">Link Sharing App</span>
        </h1>
        <GoogleButton />
      </section>
    </main>
  );
}
