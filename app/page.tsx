import fs from "fs";
import Link from "next/link";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
}

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug)=> (
    <div>
      <Link href={`/posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ))
  return (
    <div>
        <div>Tech insights for modern moms</div>
        <div>{postPreviews}</div>
    </div>
  )
}
