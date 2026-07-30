type StatsProps = {
  stats: {
    totalPlaying: number;
    totalVisits: number;
    totalGames: number;
  };
};

export default function Stats({ stats }: StatsProps) {
  const items = [
    {
      id: "live",
      value: stats.totalPlaying.toLocaleString(),
      label: "Players Online",
    },
    {
      id: "visits",
      value: `${(stats.totalVisits / 1_000_000).toFixed(1)}M`,
      label: "Total Visits",
    },
    {
      id: "games",
      value: stats.totalGames.toString(),
      label: "Experiences",
    },
  ];

  return (
    <section className="border-t border-white/10 bg-[#080808] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[6px] text-yellow-400">
            Studio Stats
          </p>

          <h2 className="text-5xl font-black text-white">
            Growing Every Day
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {items.map((stat) => (
            <div
              key={stat.id}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/30"
            >
              <h3 className="text-6xl font-black text-yellow-400">
                {stat.value}
              </h3>

              <p className="mt-5 text-lg text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}