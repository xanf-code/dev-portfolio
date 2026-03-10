import MainLayout from "@/components/MainLayout";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "not-impressed-by-complexity",
    title: "I'm a programmer and I'm not impressed by complexity.",
    date: "September 4, 2025",
    excerpt:
      "Thoughts on simplicity, complexity, and what really matters in software development.",
  },
];

export default function Blog() {
  return (
    <MainLayout>
      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 sm:mb-12">Blog</h1>
        <div className="flex flex-col gap-8 sm:gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.id}`} className="no-underline">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold group-hover:underline">
                    {post.title}
                  </h2>
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

