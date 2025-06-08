import MainLayout from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <MainLayout>
      <section className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-gray-300">skills</h1>
          <h2 className="text-white text-3xl font-bold">expertise</h2>
        </div>

        {/* Core Technologies Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">💻</span> Core Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Java</Badge>
            <Badge>Spring Boot</Badge>
            <Badge>Node.js</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Angular</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
          </div>
        </div>

        {/* Backend */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">⚙️</span> Backend
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm text-gray-400 mb-2">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Spring Boot</Badge>
                <Badge>Express.js</Badge>
                <Badge>Flask</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 mb-2">
                APIs & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge>REST APIs</Badge>
                <Badge>GraphQL</Badge>
                <Badge>Microservices</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Frontend */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">🎨</span> Frontend
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm text-gray-400 mb-2">
                Frameworks & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Angular</Badge>
                <Badge>Redux</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 mb-2">Styling & UI</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Tailwind CSS</Badge>
                <Badge>Material UI</Badge>
                <Badge>Responsive Design</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">🗄️</span> Database
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm text-gray-400 mb-2">Databases</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>MongoDB</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MySQL</Badge>
                <Badge>Redis</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 mb-2">ORM & Tools</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Hibernate</Badge>
                <Badge>Mongoose</Badge>
                <Badge>Database Design</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">☁️</span> Cloud & DevOps
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm text-gray-400 mb-2">
                Cloud & Infrastructure
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge>AWS</Badge>
                <Badge>Docker</Badge>
                <Badge>Kubernetes</Badge>
                <Badge>Linux</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 mb-2">CI/CD & Automation</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>CI/CD</Badge>
                <Badge>GitHub Actions</Badge>
                <Badge>Jenkins</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring & Testing */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">📊</span> Monitoring & Testing
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge>JUnit</Badge>
            <Badge>Jest</Badge>
            <Badge>Prometheus</Badge>
            <Badge>Grafana</Badge>
            <Badge>ELK Stack</Badge>
            <Badge>Postman</Badge>
            <Badge>Swagger</Badge>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
