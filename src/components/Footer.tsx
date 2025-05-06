"use client";

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="flex flex-col space-y-1 text-sm text-gray-400">
        <a
          href="#"
          className="hover:text-white transition-colors duration-200"
          rel="noopener noreferrer"
        >
          pubkey.gpg↗
        </a>
        <a
          href="https://github.com/themackabu"
          className="hover:text-white transition-colors duration-200"
          rel="noopener noreferrer"
          target="_blank"
        >
          @themackabu↗
        </a>
        <a
          href="mailto:hello@themackabu.dev"
          className="hover:text-white transition-colors duration-200"
          rel="noopener noreferrer"
        >
          hello@themackabu.dev↗
        </a>
      </div>
    </footer>
  );
}
