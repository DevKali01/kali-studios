import { notFound } from "next/navigation";
import { games } from "../../data/games";

type GamePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GamePage({ params }: GamePageProps) {
  const { id } = await params;

  const game = games.find((g) => g.id === id);

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080808] pt-32 text-white">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-12 h-96 rounded-3xl bg-gradient-to-r from-yellow-400/20 to-black" />

        <h1 className="text-6xl font-black">
          {game.name}
        </h1>

        <div className="mt-8 flex gap-8 text-xl text-gray-400">
          <div>👥 Loading...</div>
          <div>👁 Loading...</div>
        </div>

        <button className="mt-10 rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
          Play on Roblox
        </button>

      </div>
    </main>
  );
}