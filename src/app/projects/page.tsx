import MainLayout from "@/components/MainLayout";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const projectData = [
  {
    title: "ChillHunt",
    description: "LinkedIn job filter extension",
    link: "https://github.com/xanf-code/linkedin-chillhunt",
    status: "released" as const,
    imageUrl: "/projects/ChillHunt.jpg",
  },
  {
    title: "CourseCraft",
    description: "Course recommendation engine (NEU)",
    imageUrl: "/projects/CourseCraft.jpeg",
    link: "https://github.com/xanf-code/web-dev-6150-final",
    status: "released" as const,
  },
  {
    title: "Risk Fraud Screener",
    description: "Rule-based fraud detection engine",
    bgColor: "#2a0a37",
    link: "https://github.com/xanf-code/screener-backend",
    imageUrl: "/projects/Placeholder.jpeg",
    status: "progress" as const,
  },
  {
    title: "InsiderShibu",
    description: "Insider trading monitoring system",
    bgColor: "#3d1a0a",
    link: "https://www.producthunt.com/products/insider-shibu#insider-shibu",
    imageUrl: "/projects/shibu.avif",
    status: "archived" as const,
  },
];

const otherProjects = [
  {
    title: "[fullstack]",
    description: "Fullstack client for afcai.com",
    link: "https://github.com/xanf-code/afcai-frontend",
  },
  {
    title: "[mobile]",
    description: "security breach reporter mobile app",
    link: "https://github.com/xanf-code/whats_you",
  },
];
export default function Projects() {
  return (
    <MainLayout>
      <section>
        <div className="mb-6">
          <h1 className="text-gray-300">projects</h1>
          <h2 className="text-white text-3xl font-bold">all</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {projectData.map((project) => (
            <Link href={project.link} key={project.title}>
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                bgColor={project.bgColor}
                link={project.link}
                status={project.status}
                imageUrl={project.imageUrl}
              />
            </Link>
          ))}
        </div>

        {/* Others Projects */}
        <div className="mb-4 mt-6">
          <h1 className="text-gray-300">projects</h1>
          <h2 className="text-white text-3xl font-bold">other</h2>
        </div>

        <div>
          {otherProjects.map((project, id) => (
            <div key={id}>
              <Link href={project.link}>
                <p className="text-white hover:underline hover:decoration-dashed">
                  <span className="text-gray-300">{project.title} </span>
                  <span className="text-gray-300">- </span>
                  <span className="text-white font-medium text-lg">
                    {project.description}
                  </span>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
