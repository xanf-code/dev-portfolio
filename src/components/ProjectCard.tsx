"use client";

import Image from "next/image";
import { generatePlaceholderSVG } from "./PlaceholderImage";

type ProjectStatus = "released" | "develop" | "progress" | "archived";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
  status: ProjectStatus;
  bgColor?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  status,
  bgColor = "#222",
}: ProjectCardProps) {
  const imageSrc = imageUrl || generatePlaceholderSVG(title, bgColor);

  return (
    <div className="relative flex flex-col">
      <div className="relative w-full h-36 rounded-sm overflow-hidden border border-zinc-800 mb-3">
        {typeof imageSrc === "string" && imageSrc.startsWith("data:") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            quality={100}
          />
        )}

        <div
          className={`absolute bottom-3 right-3 px-3 py-1 text-sm font-medium ${
            status === "released"
              ? "bg-green-600 text-white"
              : "bg-yellow-500 text-black"
          }`}
        >
          {status}
        </div>
      </div>

      <h3 className="text-xl font-bold flex items-center hover:underline hover:decoration-dashed text-white">
        {title}
      </h3>

      {/* Project Description */}
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}
