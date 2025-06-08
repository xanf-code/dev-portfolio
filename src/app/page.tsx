import MainLayout from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <MainLayout>
      <section className="max-w-3xl">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-3 tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            hi hi ~
          </h1>
          <h2 className="text-2xl mb-6 font-semibold text-gray-200">
            I&apos;m a chaotic good developer with a tail and too many side
            projects.
          </h2>
        </div>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            I turn weird late-night ideas into functioning code before
            breakfast.
          </p>

          <p className="text-lg leading-relaxed">
            To make a long and boring story shorter: Now I work on core and full
            stack software development and my work output is finally catching up
            to my moral principles and aesthetic ideals.
          </p>

          <p className="text-lg mb-4 font-medium text-white">
            Some fun facts, because why be normal:
          </p>

          <ul className="space-y-4">
            <li className="flex items-start group">
              <span className="mr-3 text-xl group-hover:scale-110 transition-transform">
                🔥
              </span>
              <div>
                <span className="text-lg leading-relaxed">
                  Java is my favorite programming language{" "}
                  <span className="ml-1">📈</span>
                </span>
                <div className="flex gap-2 mt-2">
                  <Badge>Java</Badge>
                  <Badge>Angular</Badge>
                  <Badge>Spring Boot</Badge>
                  <Badge>Hibernate</Badge>
                </div>
              </div>
            </li>
            <li className="flex items-start group">
              <span className="mr-3 text-xl group-hover:scale-110 transition-transform">
                ⚡
              </span>
              <div>
                <span className="text-lg leading-relaxed">
                  Building full stack apps with MERN stack is my jam{" "}
                  <span className="ml-1">🚀</span>
                </span>
                <div className="flex gap-2 mt-2">
                  <Badge>MongoDB</Badge>
                  <Badge>Express</Badge>
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                </div>
              </div>
            </li>
            <li className="flex items-start group">
              <span className="mr-3 text-xl group-hover:scale-110 transition-transform">
                🍓
              </span>
              <div>
                <span className="text-lg leading-relaxed">
                  Strawberries do belong in code comments (and maybe pizza too?)
                </span>
                <div className="flex gap-2 mt-2">
                  <Badge>Code Comments</Badge>
                  <Badge>Pizza</Badge>
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
