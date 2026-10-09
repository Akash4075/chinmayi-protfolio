import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Trophy } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Chinmayi M" },
      { name: "description", content: "Internships, hackathon wins and achievements of Chinmayi M — embedded systems, IoT and AI." },
      { property: "og:title", content: "Experience — Chinmayi M" },
      { property: "og:description", content: "Internships, hackathon wins and achievements of Chinmayi M." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

const internships = [
  {
    role: "Embedded Systems & IoT Intern",
    org: "NAIN Incubation Centre, Government of Karnataka",
    period: "Jul 2026 – Aug 2026",
    points: [
      "Worked on Silkworm Farm Automation and Environmental Monitoring using embedded systems and IoT.",
      "Contributed to sensor integration, automation, and monitoring of environmental conditions.",
    ],
  },
  {
    role: "Embedded System Intern",
    org: "Amtariksha Tech Pvt. Ltd., Bangalore",
    period: "Jan 2026 – Feb 2026",
    points: [
      "Contributed to the development of an Industrial Curd Setting Machine.",
      "Assisted in system integration, component selection, and testing; gained hands-on exposure to industrial automation.",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    org: "CodeAlpha (Virtual)",
    period: "Completed",
    points: [
      "Completed a virtual AI internship and received a Letter of Recommendation for strong analytical and collaboration skills.",
    ],
  },
];

const achievements = [
  { title: "1st Prize — Krishimanthana Hackathon", detail: "36-hours hackathon by Me-Rise Foundation" },
  { title: "1st Prize — SIH Inter College Hackathon", detail: "BGSIT — Milk Chilling Can Project" },
  { title: "₹5 Lakh Government Funding", detail: "NAIN Incubation Centre, Govt. of Karnataka — Silkworm Farm Automation with Robotic Automation" },
  { title: "2nd Prize — College Hackathon", detail: "PES College Inter" },
  { title: "2nd Prize — MECHNOVATE Inter-College Project Exhibition", detail: "Cash prize winner" },
  { title: "4th Place — JVTM", detail: "Adichunchanagiri" },
  { title: "Shortlisted — Startup Sparks", detail: "Vivartan Incubation Centre, Mysuru" },
];

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-mono text-xs tracking-widest text-primary">// EXPERIENCE</h1>
      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Where I've worked & won</h2>

      {/* Internships timeline */}
      <div className="mt-14">
        <div className="mb-8 flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-copper" />
          <h3 className="text-2xl font-semibold">Internships</h3>
        </div>
        <div className="space-y-6 border-l-2 border-border pl-8">
          {internships.map((job) => (
            <div key={job.role} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="card-trace rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-lg font-semibold">{job.role}</h4>
                  <span className="font-mono text-xs tracking-wide text-primary">{job.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{job.org}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-20">
        <div className="mb-8 flex items-center gap-3">
          <Trophy className="h-6 w-6 text-copper" />
          <h3 className="text-2xl font-semibold">Achievements & Competitions</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((a) => (
            <div key={a.title} className="card-trace rounded-xl p-5">
              <h4 className="font-semibold text-primary">{a.title}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
