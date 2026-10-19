
import { NextResponse } from "next/server";
import { games } from "../../data/games";
import { getGame } from "../../lib/roblox";

export const dynamic = "force-dynamic";

export async function GET() {
  const results = await Promise.all(
    games.map(async (game) => {
      try {
        const robloxGame = await getGame(game.placeId);

        if (
          typeof robloxGame.playing !== "number" ||
          typeof robloxGame.visits !== "number"
        ) {
          console.warn(`Invalid statistics returned for ${game.name}`);
          return null;
        }

        return {
          ...game,
          thumbnail: robloxGame.thumbnail ?? "",
          playing: robloxGame.playing,
          visits: robloxGame.visits,
        };
      } catch (error) {
        console.warn(`Failed to refresh ${game.name}:`, error);
        return null;
      }
    })
  );

  // Do odpovědi zařadíme pouze hry, pro které máme platná data.
  const gamesWithData = results.filter(
    (game): game is NonNullable<typeof game> => game !== null
  );

  if (gamesWithData.length === 0) {
    return NextResponse.json(
      { error: "Roblox statistics are temporarily unavailable" },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }

  gamesWithData.sort(
    (a, b) => b.playing - a.playing || b.visits - a.visits
  );

  const stats = {
    totalPlaying: gamesWithData.reduce(
      (sum, game) => sum + game.playing,
      0
    ),
    totalVisits: gamesWithData.reduce(
      (sum, game) => sum + game.visits,
      0
    ),
    totalGames: games.length,
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
