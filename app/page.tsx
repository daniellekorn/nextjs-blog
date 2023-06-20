import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentPosts from "./components/RecentPosts";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <RecentPosts />
      </main>
    </>
  );
}
