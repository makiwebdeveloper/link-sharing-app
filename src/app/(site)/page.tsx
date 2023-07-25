import Editor from "@/components/Editor";
import Preview from "@/components/Preview";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  return (
    <main className="flex flex-col-reverse sm:flex-row gap-5 mt-5 h-full">
      <Preview />
      <Editor />
    </main>
  );
}
