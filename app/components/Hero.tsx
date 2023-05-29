import Image from "next/image"

export default function Hero() {
    return (
      <header className="py-16">
        <div className="container flex items-center justify-between px-4 mx-auto">
          <div className="w-1/2">
            <p className="mb-2 text-lg font-bold">Overcome self-doubt. Embrace possibilities.</p>
            <h1 className="mb-4 text-3xl font-bold">Tech insights for modern moms</h1>
            <h2 className="text-gray-700">Empowering you to enter the professional tech world, organize your life and mind, and even launch your own business.</h2>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/main-women.jpg"
              width={400}
              height={800}
              alt="Two women in a casual and fun business meeting."
            />
          </div>
        </div>
      </header>
    )
  }
  