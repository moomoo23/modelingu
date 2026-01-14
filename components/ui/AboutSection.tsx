import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* Top row */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={`top-${i}`} className="flex justify-center">
            <Image
              src={`/images/pic${i}_1.png`}
              alt=""
              width={374}
              height={325}
              className="h-auto w-full max-w-[374px] object-cover contrast-[1.02] saturate-[0.98]"
            />
          </div>
        ))}
      </div>

      {/* Text */}
      <div className="mx-auto my-14 max-w-3xl text-center">
        <p className="font-serif text-xl italic leading-relaxed text-black">
          A collection of applied research notes, models, and analytical
          projects developed through direct construction. The focus is on
          uncertainty, control, and complex systems, studied by implementing
          ideas rather than treating them as abstractions.
        </p>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={`bottom-${i}`} className="flex justify-center">
            <Image
              src={`/images/pic${i}_2.png`}
              alt=""
              width={374}
              height={325}
              className="h-auto w-full max-w-[374px] object-cover contrast-[1.02] saturate-[0.98]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
