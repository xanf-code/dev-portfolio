"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  path: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Certifications", path: "/certifications" },
  { name: "Principles", path: "/principles" },
  { name: "Blog", path: "/blog" },
  { name: "Github", path: "https://github.com/xanf-code", external: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mb-12">
      <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4 sm:gap-4">
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold no-underline hover:opacity-70 whitespace-nowrap"
        >
          darshan.a
        </Link>
        <div className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                target={item.external ? "_blank" : undefined}
                className={`text-[12px] sm:text-sm font-medium no-underline hover:opacity-70 ${
                  isActive ? "border-b-2 border-black" : "text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

