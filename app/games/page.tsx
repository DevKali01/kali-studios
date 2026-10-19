
import { games } from "../data/games";
import { getGame } from "../lib/roblox";
import GamesLive from "../components/GamesLive";

export const dynamic = "force-dynamic";

export default async function GamesPage() {
  const gamesWithData = await Promise.all(
    games.map(async (game) => {
      try {
        const robloxGame = await getGame(game.placeId);

        return {
          ...game,
          thumbnail: robloxGame.thumbnail,
          playing: robloxGame.playing,
          visits: robloxGame.visits,
        };
      } catch (error) {
        console.error(`Failed to load game ${game.name}:`, error);

        return {
          ...game,
          thumbnail: "",
          playing: 0,
          visits: 0,
        };
      }
    })
  );

  gamesWithData.sort((a, b) => b.playing - a.playing);

  return <GamesLive initialGames={gamesWithData} />;
}
