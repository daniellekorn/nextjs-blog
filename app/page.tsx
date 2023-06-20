import Hero from "./components/Hero";
import RecentPosts from "./components/RecentPosts";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <RecentPosts />
    </main>
  );
}
