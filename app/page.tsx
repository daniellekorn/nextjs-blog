import Hero from "./components/Hero";
import RecentPosts from "./components/RecentPosts";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <RecentPosts />
    </main>
  );
}
