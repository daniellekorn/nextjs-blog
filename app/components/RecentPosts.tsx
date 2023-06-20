import PostPreview from "./PostPreview";
import { getSortedPostsData } from "@/lib/posts";

const RecentPosts = () => {
  const posts = getSortedPostsData();

  return (
    <section className="py-8 bg-teal-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-6xl">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
