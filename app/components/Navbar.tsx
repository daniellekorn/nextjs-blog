import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-center w-full bg-white border-b">
            <div className="container flex flex-wrap items-center justify-between px-4 py-4 mx-auto max-w-8xl">
                <div>
                    <Link href="/" className="text-lg font-bold leading-tight text-teal-600 md:inline-block md:mt-0 hover:text-teal-800">Danielle Korn</Link>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <Link href="/about" className="block mt-2 mr-6 text-lg font-bold leading-tight text-teal-800 md:inline-block md:mt-0 hover:text-teal-600">About</Link>
                    <Link href="/posts" className="block mt-2 mr-6 text-lg font-bold leading-tight text-teal-800 md:inline-block md:mt-0 hover:text-teal-600">Blog</Link>
                    <Link href="/contact" className="block mt-2 mr-6 text-lg font-bold leading-tight text-teal-800 md:inline-block md:mt-0 hover:text-teal-600">Contact</Link>
                </div>
            </div>
        </nav>
    )
}