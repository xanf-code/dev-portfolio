"use client";

import Image from "next/image";
import Link from "next/link";
import { generatePlaceholderSVG } from "./PlaceholderImage";

type ProjectStatus = "released" | "develop" | "progress" | "archived";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
  status: ProjectStatus;
  bgColor?: string;
  skills: string;
}


export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
  status,
  bgColor = "#222",
  skills,
}: ProjectCardProps) {
  const imageSrc = imageUrl || generatePlaceholderSVG(title, bgColor);

  return (
    <div className="relative flex flex-col group">
      <Link href={link} className="no-underline">
        <div className="flex justify-between items-baseline mb-1">
          <h3 className="text-lg font-bold group-hover:underline">
            {title}
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{status}</span>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed italic">{description}</p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          {skills.split(",").map((s) => s.trim()).join(" / ")}
        </div>
      </Link>
    </div>
  );
}
