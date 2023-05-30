import Posts from "../components/Posts";

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  return <Posts />;
}
