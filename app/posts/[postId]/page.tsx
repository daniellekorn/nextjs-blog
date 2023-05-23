import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="flex container mx-auto">
      <div className="flex-col container mx-auto p-10">
        <h1 className="prose md:prose-lg lg:prose-xl mx-auto">{title}</h1>
        <p className="prose md:prose-sm lg:prose-md mx-auto">{pubDate}</p>
        <article className="prose md:prose-md lg:prose-lg mt-8 mx-auto">
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <p>
            <Link href="/" className="prose prose-sm">
              ← Back to home
            </Link>
          </p>
        </article>
      </div>
    </main>
  );
}
