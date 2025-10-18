import MainLayout from "@/components/MainLayout";

export default function Principles() {
  return (
    <MainLayout>
      <section>
        <div className="mb-6">
          <h1 className="text-gray-300">principles</h1>
          <h2 className="text-white text-3xl font-bold">
            Loosely defined and incomplete.
          </h2>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-200">Engineering</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-8">
          <li>Deal with the mess.</li>
          <li>Let different things be different.</li>
          <li>Always use UUIDs.</li>
          <li>Delay serialization.</li>
          <li>Look at things.</li>
          <li>
            Never name something{" "}
            <code className="bg-zinc-800 px-2 py-1 rounded-sm text-sm text-gray-200">
              end
            </code>
            . Always either{" "}
            <code className="bg-zinc-800 px-2 py-1 rounded-sm text-sm text-gray-200">
              endExclusive
            </code>{" "}
            or{" "}
            <code className="bg-zinc-800 px-2 py-1 rounded-sm text-sm text-gray-200">
              endInclusive
            </code>
            .
          </li>
          <li>
            Good tools are critical. For whatever you&apos;re doing, ask the
            most senior engineer you know what their favorite tool is for it. If
            that person isn&apos;t immediately available, ask the best language
            model (you&apos;ll trade off precision but still get surprisingly
            good recall). If there isn&apos;t a good tool, make one.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mb-4 text-gray-200">
          Personal &amp; Career
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li>
            Never stop learning—education is a journey, not a destination.
          </li>
          <li>Build things that make you smile (and maybe others too).</li>
          <li>Let your work catch up to your ideals.</li>
          <li>Embrace side projects—they&apos;re where the magic happens.</li>
          <li>Ask questions, even if they sound weird or obvious.</li>
          <li>Share what you learn, even if it&apos;s just with one person.</li>
          <li>Strawberries (and fun) belong in code comments.</li>
          <li>Be proud of your roots, but always look forward.</li>
        </ol>
      </section>
    </MainLayout>
  );
}
