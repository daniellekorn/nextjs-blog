import Image from "next/image";

export default function Hero() {
  return (
    <header>
      <div className="container flex items-center justify-between px-4 mx-auto">
        <div className="w-1/2">
          <div className="flex flex-col justify-center p-20 bg-white">
            <p className="mb-2 font-bold md:text-lg lg:text-xl">
              Overcome self-doubt. Embrace possibilities.
            </p>
            <h1 className="mb-4 font-bold md:text-3xl lg:text-5xl">
              Tech insights for
              <br />
              modern moms
            </h1>
            <h2 className="text-gray-700 md:text-lg lg:text-xl">
              Empowering you to enter the professional tech world, organize your
              life and mind, and even launch your own business.
            </h2>
          </div>
        </div>
        <div className="flex justify-center w-1/2">
          <Image
            className="pt-8 pb-4"
            src="/images/main-women.jpg"
            width={400}
            height={800}
            alt="Two women in a casual and fun business meeting."
          />
        </div>
      </div>
    </header>
  );
}
