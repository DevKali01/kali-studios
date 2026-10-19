
import { NextResponse } from "next/server";
import { games } from "../../data/games";
import { getGame } from "../../lib/roblox";

export const dynamic = "force-dynamic";

export async function GET() {
  const gamesWithData = await Promise.all(
    games.map(async (game) => {
      try {
        const robloxGame = await getGame(game.placeId);

        return {
          ...game,
          thumbnail: robloxGame.thumbnail,
          playing: robloxGame.playing ?? 0,
          visits: robloxGame.visits ?? 0,
        };
      } catch (error) {
        console.warn(`Failed to refresh ${game.name}:`, error);

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

  const stats = {
    totalPlaying: gamesWithData.reduce(
      (sum, game) => sum + game.playing,
      0
    ),
    totalVisits: gamesWithData.reduce(
      (sum, game) => sum + game.visits,
      0
    ),
    totalGames: gamesWithData.length,
  };

  return NextResponse.json(
    {
      games: gamesWithData,
      stats,
      updatedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
