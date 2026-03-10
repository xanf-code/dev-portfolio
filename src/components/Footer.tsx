"use client";

export default function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-black text-sm text-gray-500">
      <div className="flex justify-between items-center">
        <span>© {new Date().getFullYear()} darshan.a</span>
        <a href="https://github.com/xanf-code" target="_blank" className="no-underline hover:underline">Github</a>
      </div>
    </footer>
  );
}
