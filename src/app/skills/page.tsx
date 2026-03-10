import MainLayout from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <MainLayout>
      <section className="max-w-2xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold">Skills</h1>
        </div>

        <div className="space-y-10 sm:space-y-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Core Technologies</h2>
            <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-3 font-medium">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Node.js</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>Python</span>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Backend & Infrastructure</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-bold uppercase text-gray-400 mb-3">Frameworks</h3>
                <ul className="space-y-1 text-sm">
                  <li>Spring Boot</li>
                  <li>Express.js</li>
                  <li>Flask</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase text-gray-400 mb-3">Cloud & DevOps</h3>
                <ul className="space-y-1 text-sm">
                  <li>AWS</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Frontend & Design</h2>
            <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-3 text-sm">
              <span>React / Next.js</span>
              <span>Angular</span>
              <span>Redux</span>
              <span>Tailwind CSS</span>
              <span>Material UI</span>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Data</h2>
            <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-3 text-sm">
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>Redis</span>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

