"use client";

import MainLayout from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import experienceData from "@/data/experience.json";

export default function Experience() {
  return (
    <MainLayout>
      <section className="max-w-2xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold">Experience</h1>
        </div>

        <div className="space-y-20">
          {experienceData.experiences.map((exp, index) => (
            <div key={index} className="relative border-l border-black pl-4 sm:pl-8 pb-4">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-black rounded-full" />
              
              <div className="flex flex-col gap-1 mb-6">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <div className="flex justify-between items-baseline flex-wrap gap-2 text-sm">
                  <span className="font-bold uppercase tracking-widest text-gray-500">{exp.company}</span>
                  <span className="text-gray-400 font-medium">{exp.period}</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">{exp.location}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 leading-relaxed list-disc list-outside ml-4">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {exp.technologies.join(" / ")}
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

