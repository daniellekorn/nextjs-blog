import Image from "next/image"

export default function Tagline() {
    return (
      <section>
        <div>
            <p>Overcome self-doubt. Embrace possibilities.</p>
            <h1>Tech insights for modern moms</h1>
            <p>Empowering you to enter the professional tech world, organize your life and mind, and even launch your own business.</p>
        </div>
        <Image
            src="/images/main-women.jpg"
            width={400}
            height={800}
            alt="Two women in a casual and fun business meeting."
        />
      </section>
    )
  }
  