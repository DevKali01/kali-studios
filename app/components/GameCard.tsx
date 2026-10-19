
import Link from "next/link";
import Image from "next/image";

type GameCardProps = {
  id: string;
  name: string;
  placeId: number;
  thumbnail: string;
  playing: number;
  visits: number;
};

export default function GameCard({
  id,
  name,
  placeId,
  thumbnail,
  playing,
  visits,
}: GameCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/10">
      <a
        href={`https://www.roblox.com/games/${placeId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative h-56 w-full cursor-pointer bg-[#181818]">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-500">
              Image unavailable
            </div>
          )}
        </div>
      </a>

      <div className="p-8">
        <h2 className="text-2xl font-black text-white">
          {name}
        </h2>

        <div className="mt-4 space-y-2 text-gray-400">
          <p>👥 {playing.toLocaleString()} Playing</p>
          <p>👁️ {visits.toLocaleString()} Visits</p>
        </div>

        <a
          href={`https://www.roblox.com/games/${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full rounded-xl bg-yellow-400 py-3 text-center font-bold text-black transition duration-300 hover:scale-[1.02] hover:bg-yellow-300"
        >
          View Experience
        </a>
      </div>
    </div>
  );
}
