import Image from "next/image";

type TeamCardProps = {
  username: string;
  role: string;
  bio: string;
  avatar: string;
  userId: number;
  verified?: boolean;
};

export default function TeamCard({
  username,
  role,
  bio,
  avatar,
  userId,
  verified,
}: TeamCardProps) {
  return (
    <a
      href={`https://www.roblox.com/users/${userId}/profile`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        block
        overflow-hidden
        rounded-3xl
        bg-[#181818]
        border border-white/10
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-yellow-400/40
        hover:shadow-[0_0_40px_rgba(255,200,0,0.08)]
      "
    >
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden rounded-t-3xl bg-[#202020]">
        {/* Gold Glow */}
        <div className="absolute left-1/2 top-6 h-56 w-56 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[90px]" />

        <Image
          src={avatar}
          alt={username}
          fill
          className="
            object-contain
            scale-[0.88]
            transition-transform
            duration-500
            group-hover:scale-[0.92]
          "
        />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#181818] via-[#181818]/80 to-transparent" />

        {/* Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black">
            View Roblox Profile →
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-[#181818] p-6">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-2xl font-bold text-white leading-none">
            {username}
          </h3>

          {verified && (
            <div className="mt-[1px] flex h-6 w-6 shrink-0 rotate-12 items-center justify-center rounded-md bg-[#3BA9FF]">
              <svg
                viewBox="0 0 24 24"
                className="-rotate-12 h-3.5 w-3.5"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          )}
        </div>

<p
  className="
    mb-5
    h-12
    text-sm
    font-semibold
    uppercase
    tracking-[4px]
    leading-6
    text-yellow-400
  "
>
  {role}
</p>

        <p className="leading-8 text-gray-400">
          {bio}
        </p>
      </div>
    </a>
  );
}