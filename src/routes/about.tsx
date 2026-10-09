import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Award, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Chinmayi M" },
      { name: "description", content: "About Chinmayi M — ECE undergraduate focused on VLSI, embedded systems, IoT and software." },
      { property: "og:title", content: "About — Chinmayi M" },
      { property: "og:description", content: "About Chinmayi M — ECE undergraduate focused on VLSI, embedded systems, IoT and software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const sgpa = [
  { sem: "Sem 1", score: 7.4 }, { sem: "Sem 2", score: 8.0 }, { sem: "Sem 3", score: 7.8 },
  { sem: "Sem 4", score: 8.48 }, { sem: "Sem 5", score: 8.6 }, { sem: "Sem 6", score: 8.62 },
];

const certifications = [
  "NPTEL Elite — Mobile VR & AI (Topper)",
  "Deloitte Data Analytics & Forensic Technology — Forage",
  "IoT & Electronics — Infosys Springboard",
  "Accenture Intro to Technology Apprenticeship — Forage",
  "AWS Solutions Architecture — Forage",
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-mono text-xs tracking-widest text-primary">// ABOUT</h1>
      <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
        Hardware at heart, software in hand.
      </h2>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        I'm Chinmayi M, an Electronics and Communication Engineering undergraduate (2023–2027)
        at Adichunchanagiri University, BGS Institute of Technology. I work hands-on across VLSI
        fundamentals, digital and analog electronics, embedded systems, and IoT — and I build
        software with Python, Java, C++, and the web stack. I'm seeking opportunities in VLSI
        and semiconductor technology to apply my knowledge and grow industry-oriented skills.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {/* Education */}
        <div className="card-trace rounded-xl p-6 md:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-copper" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <p className="font-medium">B.E — Electronics & Communication Engineering</p>
          <p className="text-sm text-muted-foreground">Adichunchanagiri University (BGS Institute of Technology), Karnataka · 2023–2027</p>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {sgpa.map((s) => (
              <div key={s.sem} className="rounded-lg border border-border bg-secondary/50 p-3 text-center">
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground">{s.sem.toUpperCase()}</div>
                <div className="mt-1 text-lg font-semibold text-primary">{s.score.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="card-trace rounded-xl p-6">
          <div className="mb-4 flex items-center gap-3">
            <Users className="h-6 w-6 text-copper" />
            <h3 className="text-xl font-semibold">Leadership</h3>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><span className="font-medium text-foreground">Student Chair</span> — IEEE Circuits & Systems Society</li>
            <li><span className="font-medium text-foreground">Student Member</span> — IEEE</li>
            <li>Organized a Project Exhibition and CodeWarzz, a 6-hour hackathon for students.</li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="card-trace rounded-xl p-6 md:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <Award className="h-6 w-6 text-copper" />
            <h3 className="text-xl font-semibold">Certifications</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <div key={c} className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-muted-foreground">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center border-t border-border/60 pt-10">
        <Link
          to="/skills"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40"
        >
          Explore More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
