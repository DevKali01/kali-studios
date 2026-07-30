import GameCard from "../components/GameCard";
import { games } from "../data/games";
import { getGame } from "../lib/roblox";

export default async function GamesPage() {
  const gamesWithData = await Promise.all(
    games.map(async (game) => {
      const robloxGame = await getGame(game.placeId);

      return {
        ...game,
        thumbnail: robloxGame.thumbnail,
        playing: robloxGame.playing,
        visits: robloxGame.visits,
      };
    })
  );

  // Seřadí hry podle aktuálního počtu hráčů (CCU)
  gamesWithData.sort((a, b) => b.playing - a.playing);

  return (
    <main className="min-h-screen bg-[#080808] pt-32 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[6px] text-yellow-400">
            Our Games
          </p>

          <h1 className="text-6xl font-black">
            Explore Our Experiences
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400">
            Every experience we build is crafted with passion for millions of
            players.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {gamesWithData.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              placeId={game.placeId}
              thumbnail={game.thumbnail}
              playing={game.playing}
              visits={game.visits}
            />
          ))}
        </div>
      </div>
    </main>
  );
}