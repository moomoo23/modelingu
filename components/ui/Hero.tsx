import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-8xl px-6 pt-40 pb-10">
        {/* Title */}
        <h1 className="font-serif text-center text-6xl leading-tight tracking-tight sm:text-6xl">
          Research-driven analysis of financial systems,
          <br />
          incentives, and uncertainty.
        </h1>

        {/* Collage */}
        <div className="relative mx-auto w-full max-w-6xl h-120 sm:h-120 lg:h-140 overflow-visible">
          {/* Big head */}
          <div className="absolute sm:left-[60%] top-1/2 w-[520px] -translate-x-[30%] rotate-[2deg] -translate-y-1/2 sm:w-[700px]">
            <Image
              src="/images/head.avif"
              alt="Editorial portrait collage base"
              width={1400}
              height={900}
              priority
              className="h-auto w-full select-none"
            />
          </div>

          {/* Eye 1 (dotted) */}
          <div className="absolute  top-[28%] w-[150px] rotate-[12deg] sm:left-[25%] sm:top-[20%] sm:w-[190px]">
            <Image
              src="/images/eye1.avif"
              alt="Eye cutout"
              width={380}
              height={380}
              className="h-auto w-full select-none"
            />
          </div>

          {/* Eye 2 (engraving / bill) */}
          <div className="absolute left-[14%] top-[60%] w-[210px] rotate-[-10deg] sm:left-[12%] sm:top-[60%] sm:w-[280px]">
            <Image
              src="/images/eye2.avif"
              alt="Engraved eye cutout"
              width={700}
              height={450}
              className="h-auto w-full select-none"
            />
          </div>
        </div>

        {/* Handle */}
      </div>
    </section>
  );
}
