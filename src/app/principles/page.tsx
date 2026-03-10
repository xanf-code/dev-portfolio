import MainLayout from "@/components/MainLayout";

export default function Principles() {
  return (
    <MainLayout>
      <section className="max-w-2xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Principles</h1>
          <p className="text-gray-500 italic">Loosely defined and incomplete.</p>
        </div>

        <div className="space-y-10 sm:space-y-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Engineering</h2>
            <ol className="space-y-6">
              {[
                "Deal with the mess.",
                "Let different things be different.",
                "Always use UUIDs.",
                "Delay serialization.",
                "Look at things.",
                "Never name something end. Always either endExclusive or endInclusive.",
                "Good tools are critical. If there isn't a good tool, make one."
              ].map((p, i) => (
                <li key={i} className="flex gap-4 sm:gap-6 pb-6 border-b border-gray-100 last:border-0">
                  <span className="font-bold text-gray-300">{i + 1}.</span>
                  <span className="text-gray-700 leading-relaxed">{p}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Personal</h2>
            <ol className="space-y-6">
              {[
                "Never stop learning.",
                "Build things that make you smile.",
                "Let your work catch up to your ideals.",
                "Embrace side projects.",
                "Ask questions, even weird ones.",
                "Share what you learn.",
                "Strawberries belong in code comments.",
                "Be proud of roots, look forward."
              ].map((p, i) => (
                <li key={i} className="flex gap-6 pb-6 border-b border-gray-100 last:border-0">
                  <span className="font-bold text-gray-300">{i + 1}.</span>
                  <span className="text-gray-700 leading-relaxed">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

