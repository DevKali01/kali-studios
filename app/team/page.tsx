import TeamCard from "../components/TeamCard";
import { team } from "../data/team";
import { getAvatar } from "../lib/roblox";

export default async function TeamPage() {
  const members = await Promise.all(
    team.map(async (member) => ({
      ...member,
      avatar: await getAvatar(member.userId),
    }))
  );

  return (
    <main className="min-h-screen bg-[#080808] pt-36 pb-24 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-20 text-center">
          <p className="mb-3 uppercase tracking-[6px] text-yellow-400">
            OUR TEAM
          </p>

          <h1 className="text-6xl font-black">
            Meet the Team
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-400">
            Passionate Roblox developers building premium experiences enjoyed by
            millions of players.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member) => (
            <div
              key={member.userId}
              className="w-full max-w-[380px] sm:w-[360px]"
            >
              <TeamCard
                username={member.username}
                role={member.role}
                bio={member.bio}
                avatar={member.avatar}
                userId={member.userId}
                verified={member.verified}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}