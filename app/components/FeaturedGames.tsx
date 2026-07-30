import Link from "next/link";
import { games } from "../data/games";

export default function FeaturedGames() {
  return (
    <section className="bg-[#080808] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mb-12 text-5xl font-black text-white">
          Our Experiences
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {games.map((game) => (
            <Link key={game.id} href={`/games/${game.id}`}>
              <div className="cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/10">
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-yellow-400/20 to-neutral-900">
                  <span className="text-2xl font-bold text-gray-500">
                    Thumbnail
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black text-white">
                    {game.name}
                  </h3>

                  <button className="mt-8 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black transition duration-300 hover:scale-[1.02] hover:bg-yellow-300">
                    View Experience
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}