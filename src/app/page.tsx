import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="border-2 border-solid border-slate-300 bg-slate-900 p-8 w-80 min-h-80 rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-center text-slate-300 text-xl">Improvisr</h1>
        <p className="text-center text-slate-300">
          practice mindfulness in creative new ways
        </p>
        <Link href="/prompts">Prompts</Link>
      </div>
    </main>
  );
}
