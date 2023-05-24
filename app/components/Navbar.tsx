import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-600 p-6 sticky w-full">
            <h1 className="flex font-semibold text-xl tracking-tight mr-8">
                <Link href="/" className="semi-bold text-white">Danielle Korn</Link>
            </h1>
            <div className="block flex-grow lg:flex lg:items-center lg:w-auto">
                <Link href="/about" className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About</Link>
                <Link href="/posts" className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Blog</Link>
                <Link href="/contact" className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Contact</Link>
            </div>
        </nav>
    )
}