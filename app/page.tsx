import fs from "fs";
import Link from "next/link";

const MainIntro = () => {
  return (
    <>
      <p>Overcome self-doubt. Embrace possibilities.</p>
      <h1>Tech insights for modern moms</h1>
      <p>Empowering you to enter the professional tech world, organize your life and mind, and even launch your own business.</p>
    </>
  )
}

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
    <main>
        <MainIntro/>
    </main>
  )
}
