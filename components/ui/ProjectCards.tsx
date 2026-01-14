type ProjectCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  typeLabel?: string;
  pdfUrl: string;
  variant?: "plain" | "tint";
};

function ArrowIcon() {
  return <span aria-hidden className="inline-block translate-y-[-1px]"></span>;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  typeLabel,
  pdfUrl,
  variant = "plain",
}: ProjectCardProps) {
  const base = "relative h-[440px]   p-10 transition-colors duration-500";
  const bg =
    variant === "tint"
      ? "bg-neutral-20 hover:bg-neutral-100"
      : "bg-white hover:bg-neutral-100";

  return (
    <a href={pdfUrl} target="_blank" rel="noreferrer" className="group block">
      <article className={`${base} ${bg}`}>
        <h3 className="font-sans text-5xl font-black leading-none tracking-tight text-neutral-900">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-6 max-w-[52ch] font-serif italic leading-relaxed text-neutral-800">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="mt-6 max-w-[60ch] font-serif leading-relaxed text-neutral-700">
            {description}
          </p>
        )}

        <div className="absolute inset-x-10 bottom-10 flex items-end justify-between gap-6">
          <p className="font-serif italic text-neutral-800">
            {typeLabel ?? ""}
          </p>

          <span className="inline-flex items-center gap-2   border-none  bg-white px-4 py-2 font-serif text-sm font-semibold text-neutral-700 transition-colors duration-500 group-hover:bg-neutral-200">
            Open article
          </span>
        </div>
      </article>
    </a>
  );
}
