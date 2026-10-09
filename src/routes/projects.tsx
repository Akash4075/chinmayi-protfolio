import { createFileRoute, Link } from "@tanstack/react-router";
import { Factory, Bug, HandMetal, Bot, BadgeIndianRupee, ThermometerSnowflake, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Chinmayi M" },
      { name: "description", content: "Projects by Chinmayi M: silkworm farm IoT automation, industrial curd setting machine, sign language detection, smart AI receptionist." },
      { property: "og:title", content: "Projects — Chinmayi M" },
      { property: "og:description", content: "IoT automation, embedded systems and AI projects by Chinmayi M." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    icon: Bug,
    title: "Silkworm Farm Automation & Environmental Monitoring",
    tags: ["IoT", "ESP32", "Sensors", "Robotic Automation"],
    description:
      "Sensor-driven automation and environmental monitoring for sericulture, reducing manual intervention and improving system efficiency. Received ₹5 lakh government funding under the NAIN Incubation Centre, Government of Karnataka.",
    badge: "₹5L Govt. Funded",
  },
  {
    icon: Factory,
    title: "Industrial Curd Setting Machine",
    tags: ["Embedded Systems", "Industrial Automation", "System Integration"],
    description:
      "Production-grade automated dairy processing machine developed during my internship at Amtariksha Tech — system integration, component selection, and testing.",
  },
  {
    icon: HandMetal,
    title: "Sign Language Detection System",
    tags: ["Python", "TensorFlow", "MediaPipe", "OpenCV"],
    description:
      "Real-time hand gesture recognition system that converts sign language into readable text using TensorFlow and MediaPipe.",
  },
  {
    icon: Bot,
    title: "Smart AI Receptionist",
    tags: ["Python", "Speech Recognition", "Automation"],
    description:
      "Voice-based virtual assistant that automates visitor interaction using Python and speech recognition.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Milk Chilling Can, SIH",
    tags: ["IoT", "Sensors", "Solar-Assisted", "Mobile App"],
    description:
      "Developed a portable milk chilling system using PCM, insulation, and smart temperature monitoring to maintain milk at 4–8°C for 6–12 hours with solar-assisted operation and mobile application integration. Won 1st place in SIH internal hackathon.",
    badge: "1st Prize SIH",
  },
];

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-mono text-xs tracking-widest text-primary">// PROJECTS</h1>
      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Things I've built</h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        From government-funded IoT automation to AI-powered recognition systems.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card-trace flex flex-col rounded-xl p-7">
            <div className="mb-5 flex items-start justify-between">
              <p.icon className="h-8 w-8 text-copper" />
              {p.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-copper/40 bg-copper/10 px-3 py-1 font-mono text-[11px] tracking-wide text-copper">
                  <BadgeIndianRupee className="h-3.5 w-3.5" /> {p.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex justify-center border-t border-border/60 pt-10">
        <Link
          to="/experience"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40"
        >
          Explore Experience <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
