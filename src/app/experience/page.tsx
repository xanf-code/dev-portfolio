"use client";

import MainLayout from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import experienceData from "@/data/experience.json";

export default function Experience() {
  return (
    <MainLayout>
      <section className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-gray-300">experience</h1>
          <h2 className="text-white text-3xl font-bold">work history</h2>
        </div>

        <div className="space-y-12">
          {experienceData.experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experienceData.experiences.length - 1 && (
                <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-zinc-700" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-blue-400 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-4 mb-2">
                      {exp.logo && (
                        <div className="relative w-12 h-12">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="mr-2">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors"
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
