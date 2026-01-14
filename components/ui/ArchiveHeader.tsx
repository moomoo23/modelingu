type SectionHeaderProps = {
  text: string;
  lineWidth?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  text,
  lineWidth = "w-64",
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-20 ${className}`}>
      <div className={align === "center" ? "text-center" : "text-left"}>
        <h2 className="font-serif text-5xl tracking-wide">{text}</h2>

        <div
          className={`mt-6 h-px bg-neutral-300 ${lineWidth} ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      </div>
    </section>
  );
}
