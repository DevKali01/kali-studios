const GAMES_API = "https://games.roblox.com/v1/games";
const THUMBNAILS_API = "https://thumbnails.roblox.com/v1/games/icons";

export async function getGame(placeId: number) {
  // Place ID -> Universe ID
  const universeRes = await fetch(
    `https://apis.roblox.com/universes/v1/places/${placeId}/universe`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!universeRes.ok) {
    throw new Error("Failed to get Universe ID");
  }

  const universeJson = await universeRes.json();
  const universeId = universeJson.universeId;

  // Game info
  const gameRes = await fetch(
    `${GAMES_API}?universeIds=${universeId}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const gameJson = await gameRes.json();

  if (!gameRes.ok || !gameJson.data?.length) {
    throw new Error(`Game not found. UniverseId: ${universeId}`);
  }

  // Thumbnail
  const thumbnailRes = await fetch(
    `${THUMBNAILS_API}?universeIds=${universeId}&size=512x512&format=Png&isCircular=false`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const thumbnailJson = await thumbnailRes.json();

  return {
    ...gameJson.data[0],
    thumbnail: thumbnailJson.data[0]?.imageUrl ?? "",
  };
}

export async function getAvatar(userId: number) {
  const avatarRes = await fetch(
    `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=720x720&format=Png&isCircular=false`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!avatarRes.ok) {
    throw new Error("Failed to fetch avatar");
  }

  const avatarJson = await avatarRes.json();

  return avatarJson.data?.[0]?.imageUrl ?? "";
}