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
        <h1 className="text-4xl font-bold mb-8 tracking-tight">Blog</h1>
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="border-l-2 border-[#0ea5e9] pl-6 py-2 hover:border-[#10b981] transition-colors group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-white group-hover:text-[#0ea5e9] transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-sm text-gray-400">{post.date}</time>
                  <p className="text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-block text-[#0ea5e9] group-hover:translate-x-1 transition-transform">
                    Read more →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
