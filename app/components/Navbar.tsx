"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Games", href: "/games" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Link href="/" className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/30">
            <span className="text-2xl font-black text-yellow-400">
              K
            </span>
          </div>

          <div>
            <h1 className="text-xl font-black tracking-[0.25em] text-yellow-400">
              KALI
            </h1>

            <p className="-mt-1 text-[10px] uppercase tracking-[0.35em] text-gray-500">
              STUDIOS
            </p>
          </div>
        </Link>

        <div className="flex gap-8 text-sm uppercase tracking-wider">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}