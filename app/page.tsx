import Hero from "@/components/ui/Hero";
import AboutSection from "@/components/ui/AboutSection";
import SectionHeader from "@/components/ui/ArchiveHeader";
import ProjectCard from "@/components/ui/ProjectCards";
const projects = [
  {
    title: "ESG Incentives and Control Theory",
    subtitle:
      "Notes toward a dynamic control theoretic model of ESG investment incentives",
    description:
      "Working notes exploring incentives, observability, and long-horizon control.",
    typeLabel: "Working Paper",
    pdfUrl: "/pdfs/esg-incentives.pdf",
    variant: "plain" as const,
  },
  {
    title: "Volatility Architecture",
    subtitle:
      "Studying the architecture of volatility in US equity markets. How volatility structure collapses under stress",
    description:
      "An exploratory research piece on how volatility co-movement structure evolves over time, using simple linear-algebraic methods to study systemic risk in equity markets.",
    typeLabel: "Exploratory Paper",
    pdfUrl: "/pdfs/volpaper_v1.pdf",
    variant: "plain" as const,
  },
  {
    title: "Bankruptcy Risk",
    subtitle:
      "Interpretable ensemble modeling for SME financial distress prediction",
    description:
      "An exploration of prediction under uncertainty, balancing model performance with interpretability. This thesis develops a hybrid architecture combining logistic structure with gradient-boosted learning to study financial distress in European SMEs, treating modeling not only as technical but as a matter of judgment, transparency, and real-world usability.",
    typeLabel: "Thesis",
    pdfUrl: "/pdfs/lucas_tepponen_thesis.pdf",
    variant: "plain" as const,
  },
];
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* next sections */}
      <div className="pt-30 pb-30">
        <p className="mt-20 text-center font-serif text-4xl tracking-wide sm:text-4xl text-gray-700">
          @MODELING.UTILITY
        </p>
      </div>
      <AboutSection />
      <div>
        <SectionHeader text="ARCHIVE" lineWidth="w-full" />
      </div>
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
