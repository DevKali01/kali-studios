import { games } from "../data/games";
import { getGame } from "./roblox";

export async function getStudioStats() {
  const gamesWithData = await Promise.all(
    games.map(async (game) => {
      const robloxGame = await getGame(game.placeId);

      return {
        ...game,
        playing: robloxGame.playing,
        visits: robloxGame.visits,
      };
    })
  );

  const totalPlaying = gamesWithData.reduce(
    (sum, game) => sum + game.playing,
    0
  );

  const totalVisits = gamesWithData.reduce(
    (sum, game) => sum + game.visits,
    0
  );

  return {
    totalPlaying,
    totalVisits,
    totalGames: games.length,
  };
}