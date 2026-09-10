import Image from "next/image";
import Link from "next/link";
import { getGame } from "../lib/roblox";

type HeroProps = {
  avatar: string;
};

export default async function Hero({ avatar }: HeroProps) {
  const featuredGame = await getGame(82453659777192);

  return (
    <section className="flex min-h-screen items-center bg-gradient-to-b from-[#070707] via-[#101010] to-black pt-24 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 text-center lg:flex-row lg:gap-20 lg:px-8 lg:text-left">

        {/* Left Side */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[6px] text-yellow-400 lg:tracking-[8px]">
            Roblox Studio
          </p>

          <h1 className="text-5xl font-black leading-tight sm:text-6xl xl:text-7xl">
            BUILDING
            <br />
            EXPERIENCES
            <br />
            PLAYED BY
            <br />
            MILLIONS
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-gray-400 lg:mx-0 lg:text-lg">
            We create premium Roblox experiences enjoyed by millions of players
            around the world. Our goal is to build polished, fun and memorable
            games that keep players coming back.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start lg:gap-6">
            <Link
              href="/games"
              className="rounded-full bg-yellow-400 px-10 py-5 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.4)]"
            >
              PLAY GAMES
            </Link>

            <Link
              href="/team"
              className="rounded-full border border-white/20 px-10 py-5 transition duration-300 hover:border-yellow-400 hover:text-yellow-400"
            >
              JOIN TEAM
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative hidden items-center justify-center lg:flex">

          {/* Background Glow */}
          <div className="absolute h-[560px] w-[560px] rounded-full bg-yellow-400/15 blur-[170px]" />
          <div className="absolute h-[320px] w-[320px] rounded-full bg-yellow-300/10 blur-[90px]" />

          {/* Floating Particles */}
          <div className="absolute -left-6 top-20 h-5 w-5 animate-pulse rounded-full bg-yellow-400/80" />
          <div className="absolute right-8 top-14 h-3 w-3 animate-pulse rounded-full bg-white/70" />
          <div className="absolute bottom-24 left-10 h-4 w-4 animate-pulse rounded-full bg-yellow-300/70" />
          <div className="absolute -right-2 bottom-16 h-6 w-6 animate-pulse rounded-full bg-yellow-500/40 blur-sm" />

          {/* Artwork Card */}
          <div className="relative flex h-[560px] w-[460px] overflow-hidden rounded-[36px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-white/[0.02] to-transparent backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-[0_0_80px_rgba(250,204,21,0.15)]">

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]" />

            {/* Game Icon Glow */}
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[110px]" />

            {/* Game Icon */}
            <div className="absolute inset-0 flex items-center justify-center px-8 pb-28 pt-16">
              {featuredGame.thumbnail ? (
                <Image
                  src={featuredGame.thumbnail}
                  alt={featuredGame.name}
                  width={390}
                  height={390}
                  priority
                  className="h-[390px] w-[390px] rounded-[28px] object-cover drop-shadow-[0_0_40px_rgba(250,204,21,0.35)] transition duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex h-[390px] w-[390px] items-center justify-center rounded-[28px] border border-yellow-400/20 bg-black/20 text-gray-500">
                  Sail Your Boat
                </div>
              )}
            </div>

            {/* Game Badge */}
            <div className="absolute left-6 top-6 rounded-full border border-yellow-400/20 bg-black/40 px-5 py-2 text-sm font-semibold backdrop-blur">
              ⛵ Sail Your Boat
            </div>

            {/* Peak CCU */}
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[3px] text-gray-400">
                Peak CCU
              </p>

              <p className="text-3xl font-black text-yellow-400">
                23.8K
              </p>
            </div>

            {/* Studio Badge */}
            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[3px] text-gray-400">
                Studio
              </p>

              <p className="font-bold">
                KALI STUDIOS
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}