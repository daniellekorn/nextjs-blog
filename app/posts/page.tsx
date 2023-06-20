import RecentPosts from "../components/RecentPosts";

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  return <RecentPosts />;
}
