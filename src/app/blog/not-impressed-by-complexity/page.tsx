import MainLayout from "@/components/MainLayout";
import Link from "next/link";

export default function BlogPost() {
  return (
    <MainLayout>
      <article className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span className="ml-2">Back</span>
        </Link>

        {/* Blog content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed text-justify">
            <p>
              So I came back to what I actually am: someone who writes code.
              Someone who, if we&apos;re being honest, struggles with the things
              that supposedly separate the exceptional from the average.
            </p>

            <p>
              I can&apos;t breeze through LeetCode mediums like it&apos;s a
              warmup. Consensus algorithms make my eyes glaze over. When I look
              at a sprawling codebase, the dependency chains tangle into knots I
              have to manually untangle, piece by piece. Rust seemed promising
              until it wasn&apos;t. The language felt like a locked door and I
              didn&apos;t have the key. And the whole ecosystem of
              microservices, container orchestration, React with fourteen
              supporting libraries? It&apos;s too many moving pieces for my
              brain to hold at once.
            </p>

            <p>So I stopped trying to be that kind of engineer.</p>

            <p>
              Instead, I made a choice: I&apos;d rather be excellent at the
              simple things than mediocre at the hard ones. And it turns out
              that&apos;s a viable strategy.
            </p>

            <p>
              I write Java and Python. Boring choices, but they&apos;re boring
              because they work. No mental overhead wondering if the language is
              fighting me or helping me. I write code that&apos;s sometimes
              verbose, but never obscure. Anyone reading it later, including
              future me, three months gone and confused, can trace the logic
              without a flowchart.
            </p>

            <p>
              I avoid abstractions like they&apos;re contagious. Inheritance,
              mixins, deep inheritance hierarchies, I don&apos;t use them.
              Composition when I need it, but mostly I just write the thing
              straightforwardly. Generics get used when the problem demands
              them, not when someone&apos;s blog post suggested it might be
              elegant. Flat data structures over nested nightmares. Simple
              objects over philosophical purity.
            </p>

            <p>
              Dependencies are the enemy, so I treat them like they cost money.
              Often I don&apos;t add external libraries. Often I just solve the
              problem myself with a couple hundred lines of clear code. It takes
              slightly longer to write, but it saves months of maintenance and
              debugging when that dependency goes unmaintained or the author
              makes a breaking change.
            </p>

            <p>
              My module APIs aren&apos;t &quot;beautiful.&quot; They&apos;re not
              designed according to some software architecture manifesto.
              They&apos;re just clear. You can look at them and understand what
              they do and how to use them. That&apos;s the whole point.
            </p>

            <p>
              Microservices don&apos;t happen here. Neither does GraphQL. I use
              JSON-over-HTTP because it&apos;s transparent and easy to debug.
              SQL gets learned and used because it&apos;s the best tool for the
              job, I spent time understanding it properly instead of trying to
              hide from it with an ORM.
            </p>

            <p>
              The resilience patterns I know actually work: timeouts that
              don&apos;t hang your system, circuit breakers that fail fast and
              give the system a chance to recover, backpressure so a slow
              consumer doesn&apos;t pile up infinite queues. These aren&apos;t
              fancy. They&apos;re just mature. They&apos;re what happens when
              you&apos;ve seen systems fail enough times to know what breaks
              them.
            </p>

            <p>
              My infrastructure is simple by design. The application. A
              database, SQLite if it&apos;s small, PostgreSQL if it needs to
              scale. Docker and shell scripts that I understand completely
              because they&apos;re not three layers of abstraction deep. Nginx
              or HAProxy when traffic routing matters. That&apos;s the stack. No
              API gateway translating between protocols, no distributed cache
              creating stale-data nightmares, no message queue hiding asynchrony
              until it explodes, no service discovery because there&apos;s only
              one service.
            </p>

            <p>
              When I need to understand how something works, I draw it.
              Dependency graphs. Sequence diagrams. I write it down because
              legacy code is a puzzle and puzzles need to be solved
              methodically, not intuited. When the code needs explaining, I
              write comments, not the kind that restate what the code obviously
              does, but the kind that explain why it does what it does or why
              this particular if statement exists instead of being refactored
              away.
            </p>

            <p>
              Documentation isn&apos;t something I skip. It&apos;s something I
              write concisely, make readable, and then I write examples, lots of
              them, because examples are how people actually learn.
            </p>

            <p>
              The software works. Not impressively. Not in a way that would
              impress an engineer at a company where the job posting lists
              sixteen required technologies. But it works for the people using
              it. The business gets what it needs. The systems stay up. The code
              doesn&apos;t cause me to wake up at 3 AM with a dread sense that
              something&apos;s on fire.
            </p>

            <p>
              Stupidity, if that&apos;s what we&apos;re calling
              constraint-driven simplicity, works better than I expected.
            </p>

            <p>
              The industry will tell you that you need to master complexity to
              be valuable. That sophistication is the price of admission. That
              if you&apos;re not keeping up with the latest distributed systems
              patterns, you&apos;re falling behind. Maybe that&apos;s true in
              some contexts. Maybe if you&apos;re building the infrastructure
              that powers global scale, you need those tools.
            </p>

            <p>
              But most code doesn&apos;t need to be that clever. Most problems
              don&apos;t need that many moving pieces. Most teams would be more
              productive if someone on the team just said no to complexity and
              built something that lasts, that&apos;s maintainable, that
              doesn&apos;t require three years of institutional knowledge to
              understand.
            </p>

            <p>I&apos;m the person who says no. And it keeps working.</p>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
