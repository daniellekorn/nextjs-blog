import fs from "fs";
import Tagline from "./components/Tagline"
import Posts from "./components/Posts"

export default function Home() {
  return (
    <main>
        <Tagline/>
        <Posts/>
    </main>
  )
}
