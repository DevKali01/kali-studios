
"use client";

import { useCallback, useEffect, useState } from "react";

type Game = {
  id: string;
  name: string;
  placeId: number;
  thumbnail: string;
  playing: number;
  visits: number;
};

type StudioStats = {
  totalPlaying: number;
  totalVisits: number;
  totalGames: number;
};

type StatsResponse = {
  games: Game[];
  stats: StudioStats;
  updatedAt: string;
};

function sortGames(games: Game[]) {
  return [...games].sort(
    (a, b) => b.playing - a.playing || b.visits - a.visits
  );
}

export function useLiveStats(initialData: StatsResponse) {
  const [data, setData] = useState<StatsResponse>(() => ({
    ...initialData,
    games: sortGames(initialData.games),
  }));

  const refresh = useCallback(async () => {
    try {
      const response = await fetch("/api/stats", {
        cache: "no-store",
      });

      if (!response.ok) {
        console.warn("Statistics refresh failed:", response.status);
        return;
      }

      const newData: StatsResponse = await response.json();

      if (
        !Array.isArray(newData.games) ||
        !newData.stats ||
        typeof newData.stats.totalPlaying !== "number" ||
        typeof newData.stats.totalVisits !== "number" ||
        typeof newData.stats.totalGames !== "number"
      ) {
        console.warn("Statistics response has invalid data.");
        return;
      }

      setData((previousData) => {
        const previousGames = new Map(
          previousData.games.map((game) => [game.id, game])
        );

        const receivedGames = new Map(
          newData.games.map((game) => [game.id, game])
        );

        // Keep every previously known game, even if the API
        // temporarily fails to return it.
        const allGameIds = new Set([
          ...previousGames.keys(),
          ...receivedGames.keys(),
        ]);

        const mergedGames: Game[] = [];

        for (const id of allGameIds) {
          const previousGame = previousGames.get(id);
          const newGame = receivedGames.get(id);

          if (!newGame && previousGame) {
            mergedGames.push(previousGame);
            continue;
          }

          if (newGame) {
            mergedGames.push({
              ...previousGame,
              ...newGame,
              thumbnail:
                newGame.thumbnail || previousGame?.thumbnail || "",
              playing:
                newGame.playing === 0 && (previousGame?.playing ?? 0) > 0
                  ? previousGame!.playing
                  : newGame.playing,
              visits:
                newGame.visits === 0 && (previousGame?.visits ?? 0) > 0
                  ? previousGame!.visits
                  : newGame.visits,
            });
          }
        }

        const sortedGames = sortGames(mergedGames);

        return {
          games: sortedGames,
          stats: {
            totalPlaying: sortedGames.reduce(
              (sum, game) => sum + game.playing,
              0
            ),
            totalVisits: sortedGames.reduce(
              (sum, game) => sum + game.visits,
              0
            ),
            totalGames: Math.max(
              previousData.stats.totalGames,
              newData.stats.totalGames,
              sortedGames.length
            ),
          },
          updatedAt: newData.updatedAt,
        };
      });
    } catch (error) {
      console.warn("Statistics refresh failed:", error);
    }
  }, []);

  useEffect(() => {
    void refresh();

    const interval = window.setInterval(() => {
      void refresh();
    }, 30 * 1000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void refresh();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [refresh]);

  return data;
}
