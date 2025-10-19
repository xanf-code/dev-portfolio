import MainLayout from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <MainLayout>
      <section className="max-w-3xl">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-3 tracking-tight bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            hi hi ~
          </h1>
        </div>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            In the past, I&apos;ve enjoyed working on, LLM-driven recommendation
            systems, scalable architecture and high-throughput systems. Now I
            work on core and full stack software development and my work output
            is finally catching up to my moral principles and aesthetic ideals.
          </p>
          <p className="text-lg mb-4 font-medium text-white">About me:</p>

          <ul className="space-y-4">
            <li className="flex items-start group">
              <span className="mr-3 text-xl group-hover:scale-110 transition-transform">
                🎓
              </span>
              <div>
                <span className="text-lg leading-relaxed">
                  Northeastern University, Boston{" "}
                </span>
                <div className="flex gap-2 mt-2">
                  <Badge>MS, Software Engineering</Badge>
                  <Badge>2026</Badge>
                </div>
              </div>
            </li>
            <li className="flex items-start group">
              <span className="mr-3 text-xl group-hover:scale-110 transition-transform">
                💻
              </span>
              <div>
                <span className="text-lg leading-relaxed">
                  Applied ML/AI Intern at Dassault Systèmes{" "}
                </span>
                <div className="flex gap-2 mt-2">
                  <Badge>Python</Badge>
                  <Badge>ML</Badge>
                  <Badge>AI Agents</Badge>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-3 mt-12 text-sm">
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
            <span className="group-hover:underline">
              darshanaswath@gmail.com
            </span>
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
