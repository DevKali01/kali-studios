import Image from "next/image";

type HeroProps = {
  avatar: string;
};

export default function Hero({ avatar }: HeroProps) {
  return (
    <section className="flex min-h-screen items-center bg-gradient-to-b from-[#070707] via-[#101010] to-black pt-24 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-20 px-8">

        {/* Left Side */}
        <div className="max-w-2xl">
          <p className="mb-4 uppercase tracking-[8px] text-yellow-400">
            Roblox Studio
          </p>

          <h1 className="text-6xl font-black leading-tight xl:text-7xl">
            BUILDING
            <br />
            EXPERIENCES
            <br />
            PLAYED BY
            <br />
            MILLIONS
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            We create premium Roblox experiences enjoyed by millions of players
            around the world. Our goal is to build polished, fun and memorable
            games that keep players coming back.
          </p>

          <div className="mt-10 flex gap-6">
            <button className="rounded-full bg-yellow-400 px-10 py-5 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.4)]">
              PLAY GAMES
            </button>

            <button className="rounded-full border border-white/20 px-10 py-5 transition duration-300 hover:border-yellow-400 hover:text-yellow-400">
              JOIN TEAM
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative hidden lg:flex items-center justify-center">

          {/* Background Glow */}
          <div className="absolute h-[560px] w-[560px] rounded-full bg-yellow-400/15 blur-[170px]" />
          <div className="absolute h-[320px] w-[320px] rounded-full bg-yellow-300/10 blur-[90px]" />

          {/* Floating Particles */}
          <div className="absolute -left-6 top-20 h-5 w-5 rounded-full bg-yellow-400/80 animate-pulse" />
          <div className="absolute right-8 top-14 h-3 w-3 rounded-full bg-white/70 animate-pulse" />
          <div className="absolute bottom-24 left-10 h-4 w-4 rounded-full bg-yellow-300/70 animate-pulse" />
          <div className="absolute -right-2 bottom-16 h-6 w-6 rounded-full bg-yellow-500/40 blur-sm animate-pulse" />

          {/* Artwork Card */}
          <div className="relative flex h-[560px] w-[460px] overflow-hidden rounded-[36px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-white/[0.02] to-transparent backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-[0_0_80px_rgba(250,204,21,0.15)]">

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Avatar Glow */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[100px]" />

            {/* Avatar */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={avatar}
                alt="KALI"
                width={340}
                height={340}
                priority
                className="object-contain drop-shadow-[0_0_40px_rgba(250,204,21,0.35)] transition duration-500 hover:scale-105"
              />
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