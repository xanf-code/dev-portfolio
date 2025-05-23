"use client";

import { useEffect, useState } from "react";
import MainLayout from "@/components/MainLayout";
import ProjectCard from "@/components/ProjectCard";
import { supabase } from "@/utils/supabase";
import { Project } from "@/utils/database.types";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const otherProjects = [
  {
    title: "[fullstack]",
    description: "Fullstack client for afcai.com",
    link: "https://github.com/xanf-code/afcai-frontend",
    skills: "Next.js, Node.js, Express,Tailwind CSS, PostgreSQL",
  },
  {
    title: "[mobile]",
    description: "security breach reporter mobile app",
    link: "https://github.com/xanf-code/whats_you",
    skills: "Flutter, Firebase, Git",
  },
];

const renderSkills = (skills: string) => (
  <div className="flex flex-wrap gap-2 mt-2">
    {skills.split(",").map((skill, idx) => (
      <Badge key={idx}>{skill.trim()}</Badge>
    ))}
  </div>
);

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("id");

        if (error) {
          throw error;
        }

        if (data) {
          setProjects(data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const renderPlaceholder = () => {
    return (
      <div className="flex flex-col items-center justify-center py-10 space-y-4">
        <div className="relative w-52 h-52 opacity-80">
          <Image
            src="/assets/loading.png"
            alt="Loading projects"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-400 text-center">
          {loading
            ? "Loading projects..."
            : error
            ? "Error loading projects. Please try again later."
            : "No projects found."}
        </p>
      </div>
    );
  };

  return (
    <MainLayout>
      <section>
        <div className="mb-6">
          <h1 className="text-gray-300">projects</h1>
          <h2 className="text-white text-3xl font-bold">all</h2>
        </div>

        {loading || error || projects.length === 0 ? (
          renderPlaceholder()
        ) : (
          <div className="flex flex-col gap-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="w-full shadow-md p-2 transition hover:shadow-lg cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  bgColor={project.bgColor}
                  link={project.link}
                  status={project.status}
                  imageUrl={project.imageurl}
                  skills={project.skills}
                />
                {/* <div className="mt-4"> */}
                {/* <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3> */}
                {/* <p className="text-gray-300 mt-1">{project.description}</p> */}
                {/* {renderSkills(placeholderSkills)} */}
                {/* </div> */}
              </div>
            ))}
          </div>
        )}

        {/* Others Projects */}
        <div className="mb-4 mt-6">
          <h1 className="text-gray-300">projects</h1>
          <h2 className="text-white text-3xl font-bold">other</h2>
        </div>

        <div>
          {otherProjects.map((project, id) => (
            <div key={id} className="mb-4">
              <Link href={project.link}>
                <p className="text-white hover:underline hover:decoration-dashed">
                  <span className="text-sm text-gray-300">
                    {project.title}{" "}
                  </span>
                  <span className="text-gray-300">- </span>
                  <span className="text-white font-medium">
                    {project.description}
                  </span>
                </p>
              </Link>
              {renderSkills(project.skills)}
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
