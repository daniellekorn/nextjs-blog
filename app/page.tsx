import Hero from "./components/Hero"
import Posts from "./components/Posts"

export default function Home() {
  return (
    <main>
        <Hero/>
        <div className="max-w-4xl py-8 mx-auto">
          <Posts/>
        </div>
    </main>
  )
}
