import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="flex justify-between">
                <h1 className="justify-start">
                    <Link href="/" className="text-teal-600">Danielle Korn</Link>
                </h1>
                <div className="flex flex-row justify-center gap-6">
                    <Link href="/about" className="hover:text-teal-400">About</Link>
                    <Link href="/posts" className="hover:text-teal-400">Blog</Link>
                    <Link href="/contact" className="hover:text-teal-400">Contact</Link>
                </div>
            </div>
        </nav>
    )
}