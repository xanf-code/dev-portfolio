import MainLayout from "@/components/MainLayout";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/utils/database.types";
import Link from "next/link";
import { neon } from "@neondatabase/serverless";

export const dynamic = "force-dynamic";

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


export default async function Projects() {
  let projects: Project[] = [];
  let error: string | null = null;

  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined");
    }
    const sql = neon(process.env.DATABASE_URL);
    projects = await sql`SELECT * FROM projects ORDER BY created_at DESC` as Project[];
  } catch (e) {
    console.error("Error fetching projects:", e);
    error = "Failed to load projects.";
  }

  if (error || projects.length === 0) {
    return (
      <MainLayout>
        <div className="py-20 text-center text-gray-400">
          {error || "No projects found."}
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section>
        <div className="mb-12">
          <h1 className="text-3xl font-bold">Projects</h1>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div key={project.title} className="w-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                status={project.status}
                imageUrl={project.imageurl}
                skills={project.skills}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 mb-12">
          <h2 className="text-xl font-bold">More Projects</h2>
        </div>

        <div className="space-y-8">
          {otherProjects.map((project, id) => (
            <div key={id} className="group">
              <Link href={project.link} className="no-underline">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold group-hover:underline">{project.title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">External</span>
                </div>
                <p className="text-sm text-gray-600">{project.description}</p>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {project.skills.split(",").map(s => s.trim()).join(" / ")}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
