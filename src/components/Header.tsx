"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  // { name: "Blog", path: "/blog" },
  { name: "Github", path: "https://github.com/xanf-code", external: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:opacity-80 transition-opacity underline"
        >
          darshan.a
        </Link>
      </div>
      <div className="flex">
        <div className="flex p-1 rounded-md">
          <nav className="flex items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  target={item.external ? "_blank" : undefined}
                  className={`font-bold px-3 py-1 relative ${
                    isActive
                      ? "bg-[#0ea5e9] text-white underline"
                      : "text-gray-300 hover:text-white"
                  } transition-colors`}
                >
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
