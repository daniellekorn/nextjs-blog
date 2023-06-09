import Image from "next/image";

export default function About() {
  return (
    <div className="mt-24">
      <div className="container flex flex-col items-center max-w-6xl mx-auto bg-white p-24">
        <div className="flex items-center">
          <div className="flex flex-col justify-center w-2/3 mb-10">
            <h1 className="mb-4 text-lg md:text-xl lg:text-2xl">About me</h1>
            <h2 className="mb-4 text-lg font-bold md:text-3xl lg:text-5xl">
              Hi there, I'm Danielle.
            </h2>
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl pr-10">
              As a self-studied Full Stack Developer, I spent much time and
              energy breaking into the world of software development. Then, life
              took an exciting turn when I embraced the incredible experience of
              motherhood, which led to a career change and the inspiration to
              start this blog.
            </h3>
          </div>
          <div className="flex items-center justify-center w-1/3">
            <Image
              src="/images/headshot.jpg"
              height={300}
              width={300}
              alt="Side profile photo of me, Danielle Korn."
              className="object-cover rounded-full"
            />
          </div>
        </div>
        <div>
          <p className="mb-4 leading-relaxed text-gray-700 text-md lg:text-xl">
            About three years ago, I started as a software engineer in a dynamic
            100-person start-up. I loved this role, and I learned invaluable
            skills in adaptability, problem-solving, and accomplishing tasks
            swiftly and efficiently. About three years ago, I started as a
            software engineer in a dynamic 100-person start-up. I loved this
            role, and I learned invaluable skills in adaptability,
            problem-solving, and accomplishing tasks swiftly and efficiently.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700 text-md lg:text-xl">
            Then, becoming a mother prompted me to deeply reflect on the role I
            wanted my career to play in my life. Bid farewell to on-call shifts
            and late-night bug fixing, I found a new role that allows me to
            cherish precious moments with my family while immersing myself in
            exciting projects and collaborating with talented professionals.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700 text-md lg:text-xl">
            Now, I'm a Technical Writer at Microsoft, working to distill
            intricate concepts into user-friendly content. Working alongside
            strong engineers, driven product managers, and creative content
            developers, I learn a lot every day at work. My work and personal
            life merge to create the insights and experience that come through
            in this blog.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700 text-md lg:text-xl">
            Through my story, I aspire to inspire those navigating their own
            career paths or seeking a harmonious work-life integration. To do
            this, you need the right tools, knowledge, and support. I firmly
            believe in the power of embracing change, pursuing passions, and
            finding creative ways to achieve your goals while prioritizing what
            truly matters.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700 text-md lg:text-xl">
            So, whether you are an aspiring developer, a fellow working parent,
            or someone in search of motivation and guidance, I look forward to
            sharing my experiences and insights with you.
          </p>
        </div>
      </div>
    </div>
  );
}
