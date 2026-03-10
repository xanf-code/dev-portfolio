import MainLayout from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <MainLayout>
      <section className="max-w-2xl">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Software Engineer
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            I build scalable architecture and high-throughput systems. 
            Currently focused on core Java, full-stack development, and AI Development with an emphasis on simplicity and aesthetic ideals.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Education</h2>
            <div className="border-l border-black pl-6">
              <div className="font-bold">Northeastern University, Boston</div>
              <div className="text-sm text-gray-500">MS, Software Engineering - 2026</div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Experience</h2>
            <div className="space-y-8">
              <div className="border-l border-black pl-6">
                <div className="font-bold">Dassault Systèmes</div>
                <div className="text-sm text-gray-500">Software Engineer co-op</div>
                <p className="mt-2 text-sm text-gray-600">Python, Java, ML, AI Agents</p>
              </div>
              <div className="border-l border-black pl-6">
                <div className="font-bold">London Stock Exchange Group</div>
                <div className="text-sm text-gray-500">Software Engineer</div>
                <p className="mt-2 text-sm text-gray-600">Java, Spring Boot, AWS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-16 text-sm font-medium">
          <a
            href="https://www.linkedin.com/in/darshanaswath/"
            className="flex items-center no-underline hover:underline"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/xanf-code"
            className="flex items-center no-underline hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="mailto:darshanaswath@gmail.com"
            className="flex items-center no-underline hover:underline"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
