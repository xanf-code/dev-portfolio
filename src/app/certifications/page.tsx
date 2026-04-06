import MainLayout from "@/components/MainLayout";

interface Certification {
  title: string;
  issuer: string;
  code: string;
  year: string;
  level: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    code: "SAP-C02",
    year: "March 2026",
    level: "Professional",
    description:
      "Advanced validation of complex cloud architecture design, migration strategies, and enterprise-scale solution delivery on AWS.",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    code: "SAA-C03",
    year: "February 2026",
    level: "Associate",
    description:
      "Demonstrates ability to design resilient, cost-optimized, and high-performing architectures across a wide range of AWS services.",
  },
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    code: "DVA-C02",
    year: "February 2026",
    level: "Associate",
    description:
      "Validates proficiency in developing and maintaining AWS-based applications. Covers core services, deployment, security, and debugging on AWS.",
  },
];

export default function Certifications() {
  return (
    <MainLayout>
      <section className="max-w-2xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold">Certifications</h1>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-10">
            Amazon Web Services
          </h2>

          <div className="space-y-16">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative border-l border-black pl-4 sm:pl-8 pb-4"
              >
                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-black rounded-full" />

                <div className="flex flex-col gap-1 mb-4">
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <div className="flex justify-between items-baseline flex-wrap gap-2 text-sm">
                    <span className="font-bold uppercase tracking-widest text-gray-500">
                      {cert.issuer}
                    </span>
                    <span className="text-gray-400 font-medium">
                      {cert.year}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">
                    {cert.code} &nbsp;·&nbsp; {cert.level}
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
