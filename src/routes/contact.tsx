import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Chinmayi M" },
      { name: "description", content: "Get in touch with Chinmayi M — email, LinkedIn and GitHub." },
      { property: "og:title", content: "Contact — Chinmayi M" },
      { property: "og:description", content: "Get in touch with Chinmayi M — email, LinkedIn and GitHub." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "chinmayic477@gmail.com",
    href: "mailto:chinmayic477@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/chinmayi-m-a6908335a",
    href: "https://linkedin.com/in/chinmayi-m-a6908335a",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/CHINMAYI2005",
    href: "https://github.com/CHINMAYI2005",
  },
];

function ContactPage() {
  return (
    <div className="circuit-bg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="font-mono text-xs tracking-widest text-primary">// CONTACT</h1>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Let's connect</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          I'm open to internships and opportunities in VLSI, semiconductor technology,
          embedded systems, and software development. Reach out through any channel below.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card-trace flex items-center gap-4 rounded-xl p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                <c.icon className="h-5 w-5 text-primary" />
              </span>
              <span>
                <span className="block font-mono text-xs tracking-widest text-muted-foreground">{c.label.toUpperCase()}</span>
                <span className="mt-1 block font-medium">{c.value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 rounded-xl border border-border bg-card p-6 text-muted-foreground">
          <MapPin className="h-5 w-5 shrink-0 text-copper" />
          <span>Bellur Cross, Mandya, Karnataka, India</span>
        </div>

        <div className="mt-16 flex justify-center border-t border-border/60 pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:scale-105"
          >
            Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
