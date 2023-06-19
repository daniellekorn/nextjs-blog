import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-center w-full bg-white border-b">
      <div className="container flex flex-wrap items-center justify-between px-4 py-4 mx-auto max-w-8xl">
        <div>
          <Link
            href="/"
            className="font-bold leading-tight text-teal-600 md:text-lg lg:text-xl md:inline-block md:mt-0 hover:text-teal-800"
          >
            <Image
              src="/images/dk-logo.png"
              width={100}
              height={66}
              alt="Logo with DK initials and a half circle made of dots."
            />
          </Link>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <Link
            href="/about"
            className="block mt-2 mr-6 leading-tight text-teal-800 semi-bold md:text-lg lg:text-xl md:inline-block md:mt-0 hover:text-teal-600"
          >
            About
          </Link>
          <Link
            href="/posts"
            className="block mt-2 mr-6 leading-tight text-teal-800 semi-bold md:text-lg lg:text-xl md:inline-block md:mt-0 hover:text-teal-600"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
