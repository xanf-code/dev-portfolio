import MainLayout from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <MainLayout>
      <section className="max-w-3xl space-y-12">
        <div>
          <h1 className="text-5xl font-bold mb-3 tracking-tight bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            hi hi ~
          </h1>
        </div>

        <section className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            I enjoy building LLM-powered recommendation systems, scalable
            architectures, and high-throughput products. Today, I focus on core
            and full-stack engineering while aligning my work with strong
            principles and clean design.
          </p>
          <p className="text-lg font-medium text-white">About me:</p>

          <ul className="space-y-4">
            <li className="flex items-start group">
              <span
                aria-hidden="true"
                className="mr-3 text-xl group-hover:scale-110 transition-transform"
              >
                🎓
              </span>
              <div>
                <span className="text-lg leading-relaxed">
                  Northeastern University, Boston
                </span>
                <div className="flex gap-2 mt-2">
                  <Badge>MS, Software Engineering</Badge>
                  <Badge>2026</Badge>
                </div>
              </div>
            </li>
            <li className="flex items-start group">
              <span
                aria-hidden="true"
                className="mr-3 text-xl group-hover:scale-110 transition-transform"
              >
                💻
              </span>
              <div>
                <span className="text-lg leading-relaxed">
                  Applied ML/AI Engineer at Dassault Systèmes (Jul 2025 - Jan
                  2026)
                </span>
                <div className="flex gap-2 mt-2">
                  <Badge>Python</Badge>
                  <Badge>ML</Badge>
                  <Badge>AI Agents</Badge>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Certifications</h2>
          <p className="text-sm text-gray-400">
            Industry-recognized AWS certifications validating cloud architecture
            and development skills.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start group">
              <span
                aria-hidden="true"
                className="mr-3 text-xl group-hover:scale-110 transition-transform"
              >
                ☁️
              </span>
              <div>
                <span className="text-lg leading-relaxed">
                  AWS Certified Developer - Associate
                </span>
                <div className="flex gap-2 mt-2">
                  <Badge>AWS</Badge>
                  <Badge>Associate</Badge>
                </div>
              </div>
            </li>
            <li className="flex items-start group">
              <span
                aria-hidden="true"
                className="mr-3 text-xl group-hover:scale-110 transition-transform"
              >
                🏗️
              </span>
              <div>
                <span className="text-lg leading-relaxed">
                  AWS Certified Solutions Architect - Associate
                </span>
                <div className="flex gap-2 mt-2">
                  <Badge>AWS</Badge>
                  <Badge>Associate</Badge>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="flex flex-col space-y-3 text-sm">
          <a
            href="https://www.linkedin.com/in/darshanaswath/"
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
            rel="noopener noreferrer"
          >
            <span className="mr-2">→</span>
            <span className="group-hover:underline">darshan.linkedin</span>
          </a>
          <a
            href="https://github.com/xanf-code"
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="mr-2">→</span>
            <span className="group-hover:underline">@xanf-code</span>
          </a>
          <a
            href="mailto:darshanaswath@gmail.com"
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
            rel="noopener noreferrer"
          >
            <span className="mr-2">→</span>
            <span className="group-hover:underline">darshanaswath@gmail.com</span>
          </a>
        </section>
      </section>
    </MainLayout>
  );
}
