import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function PromptComponent({
  params,
}: {
  params: { id: string };
}) {
  const prompt = await prisma.prompt.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="border-2 border-solid border-slate-300 bg-slate-900 p-8 w-80 min-h-80 rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-center text-slate-300">{prompt?.content}</h1>
      </div>
    </main>
  );
}
