import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section>
        <h1 className="text-4xl font-bold mb-2 tracking-tight">hi hi ~</h1>
        <h2 className="text-xl mb-4 font-semibold">
          I&apos;m a chaotic good developer with a tail and too many side
          projects.
        </h2>

        <p className="mb-5 text-base leading-relaxed">
          I turn weird late-night ideas into functioning code before breakfast.
        </p>

        <p className="mb-4 text-base leading-relaxed"></p>

        <p className="mb-4 text-base">Some fun facts, because why be normal:</p>

        <ul className="list-none pl-4 mb-4 space-y-2">
          <li className="flex items-start">
            <span className="mr-2 text-lg">• 🦊</span>
            <span className="text-base leading-relaxed">
              Foxes are the superior lifeform (this is objective science)
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-lg">• 🔥</span>
            <span className="text-base leading-relaxed">
              Java is my favorite programming language{" "}
              <span className="ml-1">📈</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-lg">• 🍓</span>
            <span className="text-base leading-relaxed">
              Strawberries do belong in code comments (and maybe pizza too?)
            </span>
          </li>
        </ul>

        <div className="flex flex-col space-y-2 mt-10 text-sm text-gray-400">
          <a
            href="https://www.linkedin.com/in/darshanaswath/"
            className="hover:text-white transition-colors duration-200"
            rel="noopener noreferrer"
          >
            darshan.linkedin↗
          </a>
          <a
            href="https://github.com/xanf-code"
            className="hover:text-white transition-colors duration-200"
            rel="noopener noreferrer"
            target="_blank"
          >
            @xanf-code↗
          </a>
          <a
            href="mailto:darshanaswath@gmail.com"
            className="hover:text-white transition-colors duration-200"
            rel="noopener noreferrer"
          >
            darshanaswath@gmail.com↗
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
