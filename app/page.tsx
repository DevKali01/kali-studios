import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import { getStudioStats } from "./lib/stats";
import { getAvatar } from "./lib/roblox";

export default async function Home() {
  const stats = await getStudioStats();
  const avatar = await getAvatar(872947210);

  return (
    <>
      <Navbar />
      <Hero avatar={avatar} />
      <Stats stats={stats} />
    </>
  );
}