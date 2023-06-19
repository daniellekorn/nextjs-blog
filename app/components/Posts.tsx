import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="py-8 bg-teal-50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {posts.map((post) => (
            <div key={post.id} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-2 text-lg font-bold">{post.title}</h3>
              <p className="mb-4 text-gray-700">{post.date}</p>
              <Link
                href={`/posts/${post.id}`}
                className="inline-block font-semibold text-teal-500 hover:text-teal-600"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
