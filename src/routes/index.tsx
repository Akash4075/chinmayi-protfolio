import { createFileRoute, Link } from "@tanstack/react-router";
import photo from "@/assets/chinmayi.jpg.asset.json";
import { ArrowRight, Cpu, Github, Linkedin, Mail, MapPin, Trophy, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chinmayi M — Electronics & Software Portfolio" },
      { name: "description", content: "Electronics & Communication Engineering student building VLSI, embedded systems, IoT and software projects." },
      { property: "og:title", content: "Chinmayi M — Electronics & Software Portfolio" },
      { property: "og:description", content: "VLSI, embedded systems, IoT and software projects by Chinmayi M." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { icon: Trophy, title: "₹5 Lakh Govt. Funding", text: "NAIN Incubation Centre grant for Silkworm Farm Automation with robotic automation." },
  { icon: Zap, title: "Hackathon Winner", text: "1st prize at Krishimanthana & SIH BGSIT, 2nd prize at PES College & MECHNOVATE, 4th place at JVTM Adichunchanagiri." },
  { icon: Cpu, title: "IEEE Student Chair", text: "Student Chair of the IEEE Circuits & Systems Society chapter." },
];

function HomePage() {
  return (
    <div className="circuit-bg">
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-16 text-center md:grid md:grid-cols-[1fr_auto] md:text-left md:py-32">
        <div className="flex flex-col items-center gap-8 md:items-start">
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs tracking-widest text-primary">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </div>
        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Chinmayi <span className="text-primary text-glow">M</span>
          <span className="mt-3 block text-2xl font-medium text-muted-foreground md:text-3xl">
            Electronics × Software Engineer
          </span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          ECE undergraduate at Adichunchanagiri University working across VLSI fundamentals,
          embedded systems, IoT, and software development — from sensor-driven automation
          to Java, C++, and web technologies.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:justify-start">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Get in Touch
          </Link>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 pt-2 text-muted-foreground md:justify-start">
          <a href="https://github.com/CHINMAYI2005" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com/in/chinmayi-m-a6908335a" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          <a href="mailto:chinmayic477@gmail.com" aria-label="Email" className="transition-colors hover:text-primary"><Mail className="h-5 w-5" /></a>
          <span className="flex items-center gap-1.5 text-sm"><MapPin className="h-4 w-4" /> Mandya, Karnataka, India</span>
        </div>
      </div>
        <div className="relative mx-auto">
          <div className="absolute -inset-3 rounded-2xl border border-primary/40" />
          <img src="/chinmayi.jpg" alt="Chinmayi M" className="relative h-80 w-64 rounded-2xl object-cover object-top md:h-96 md:w-80" />
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-8 font-mono text-xs tracking-widest text-primary">// SIGNAL HIGHLIGHTS</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="card-trace rounded-xl p-6">
              <h.icon className="mb-4 h-7 w-7 text-copper" />
              <h3 className="mb-2 text-lg font-semibold">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick skills strip */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-6 font-mono text-xs tracking-widest text-primary">// CORE STACK</h2>
          <div className="flex flex-wrap gap-3">
            {["Python", "Java (Basics)", "C++ (Basics)", "HTML", "CSS", "JavaScript", "Embedded C", "ESP32", "Arduino", "VLSI Fundamentals", "TensorFlow", "OpenCV", "MongoDB"].map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-border/60 pt-8 sm:flex-row">
            <Link to="/skills" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              Full skill matrix <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40"
            >
              Explore Next <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
