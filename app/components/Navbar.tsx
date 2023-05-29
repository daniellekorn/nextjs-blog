import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 flex flex-wrap items-center justify-between w-full px-24 py-4 bg-white border-b">
            <div className="flex items-center mr-4 bold">
                <Link href="/">Danielle Korn</Link>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
                    <Link href="/about" className="block mt-2 mr-4 md:inline-block md:mt-0">About</Link>
                    <Link href="/posts" className="block mt-2 mr-4 md:inline-block md:mt-0">Blog</Link>
                    <Link href="/contact" className="block mt-2 mr-4 md:inline-block md:mt-0">Contact</Link>
            </div>
        </nav>
    )
}