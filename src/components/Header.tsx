"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

type NavItem = {
  name: string;
  path: string;
  icon?: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { name: "~", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Principles", path: "/principles" },
  { name: "Blog", path: "/blog" },
  { name: "GitHub", path: "https://github.com/xanf-code", external: true },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:opacity-80 transition-opacity underline"
        >
          darshan.a
        </Link>
        <button
          className="sm:hidden p-2 rounded-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-400"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <HiOutlineXMark size={28} color="#67e8f9" />
          ) : (
            <HiOutlineBars3 size={28} color="#67e8f9" />
          )}
        </button>
      </div>

      <div className="hidden sm:flex">
        <div className="flex p-1 rounded-md">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = !item.external && pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-bold px-3 py-1.5 rounded-md relative transition-colors border ${
                    isActive
                      ? "bg-cyan-600/90 text-white border-cyan-400 shadow-[0_0_0_1px_rgba(34,211,238,.35)]"
                      : item.external
                        ? "text-cyan-300/90 border-transparent hover:text-cyan-100 hover:bg-cyan-900/30"
                        : "text-gray-300 border-transparent hover:text-white hover:bg-zinc-800/70"
                  }`}
                >
                  <span className="inline-flex items-center gap-1">
                    {item.icon && <span>{item.icon}</span>}
                    {item.name}
                    {item.external && (
                      <span aria-hidden="true" className="text-xs opacity-90">
                        ↗
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div className="bg-zinc-900/95 border-b border-zinc-800 shadow-lg rounded-b-xl px-6 pt-4 pb-6 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = !item.external && pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-current={isActive ? "page" : undefined}
                className={`font-bold py-2 px-2 rounded text-lg transition-colors ${
                  isActive
                    ? "bg-cyan-700/80 text-white"
                    : item.external
                      ? "text-cyan-300 hover:bg-cyan-800/30 hover:text-white"
                      : "text-cyan-200 hover:bg-cyan-800/40 hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="inline-flex items-center gap-1">
                  {item.icon && <span>{item.icon}</span>}
                  {item.name}
                  {item.external && (
                    <span aria-hidden="true" className="text-sm">
                      ↗
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
