"use client";

import MainLayout from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import experienceData from "@/data/experience.json";

export default function Experience() {
  return (
    <MainLayout>
      <section className="max-w-4xl px-2sm:px-4 mx-auto">
        <div className="mb-8">
          <h1 className="text-gray-300 text-base sm:text-lg">experience</h1>
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            work history
          </h2>
        </div>

        <div className="space-y-12">
          {experienceData.experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line (only on sm and up) */}
              {index !== experienceData.experiences.length - 1 && (
                <div className="absolute left-7 top-12 bottom-0 w-0.5 bg-zinc-700 hidden sm:block" />
              )}

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Timeline column (dot/line) */}
                <div className="hidden sm:flex flex-col items-center w-16 relative pt-2">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-blue-400 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 sm:gap-4 mb-2 flex-row">
                      {exp.logo && (
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div className="text-left">
                        <h3 className="text-lg sm:text-xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        {/* Desktop: company • period, then location below */}
                        <div className="hidden sm:flex flex-wrap items-center gap-2 text-gray-400 text-base">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                        <div className="hidden sm:block text-sm text-gray-500">
                          {exp.location}
                        </div>
                        {/* Mobile: company, then location + period below */}
                        <div className="sm:hidden">
                          <div className="text-gray-400 text-sm">
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mt-1">
                            <span>{exp.location}</span>
                            <span>•</span>
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 flex items-start text-sm sm:text-base"
                      >
                        <span className="mr-2">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-2 mb-1 justify-start">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors text-xs sm:text-sm px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
