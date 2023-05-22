import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <div>
                <h1>
                    <Link href="/">Danielle Korn</Link>
                </h1>
                <div>
                    <Link href="/about">About</Link>
                    <Link href="/posts">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}