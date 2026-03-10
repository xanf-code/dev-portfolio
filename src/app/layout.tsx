import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "darshan.dev",
  description: "Personal portfolio, a developer who enjoys random projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <PostHogProvider>
          <div className="max-w-3xl mx-auto px-4 sm:px-8 md:px-10 py-10">{children}</div>
        </PostHogProvider>
      </body>
    </html>
  );
}
