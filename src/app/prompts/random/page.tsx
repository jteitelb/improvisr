import Timer from "@/app/components/timer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function PromptComponent() {
  const promptIDs = await prisma.prompt.findMany({
    select: { id: true },
  });

  const prompt = await prisma.prompt.findUnique({
    where: {
      id: Number(promptIDs[Math.floor(Math.random() * promptIDs.length)].id),
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="gap-7 border-2 border-solid border-slate-300 bg-slate-900 p-8 w-80 min-h-80 rounded-xl flex flex-col justify-center items-center">
        <a href="">New Prompt</a>
        <h1 className="text-center text-slate-300">{prompt?.content}</h1>
        <Timer />
      </div>
    </main>
  );
}
