"use client";

import Header from "@/components/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main>
      <Header />
      <div className="min-h-[calc(100vh-250px)]">{children}</div>
      {/* <Footer /> */}
    </main>
  );
}
