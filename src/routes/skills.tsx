import { createFileRoute } from "@tanstack/react-router";
import { Code2, Cpu, Wrench, Database, BrainCircuit, Radio } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Chinmayi M" },
      { name: "description", content: "Technical skills of Chinmayi M: Java, C++, HTML, CSS, JavaScript, Python, VLSI, embedded systems and IoT." },
      { property: "og:title", content: "Skills — Chinmayi M" },
      { property: "og:description", content: "Java, C++, HTML, CSS, JavaScript, Python, VLSI, embedded systems and IoT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

type Skill = { name: string; level: number; note?: string };

const categories: { icon: typeof Code2; title: string; skills: Skill[] }[] = [
  {
    icon: Code2,
    title: "Software & Programming",
    skills: [
      { name: "Python", level: 85, note: "AI/ML, automation, scripting" },
      { name: "Java", level: 55, note: "Basics — OOP, syntax, console programs" },
      { name: "C++", level: 55, note: "Basics — data structures, problem solving" },
      { name: "HTML", level: 70, note: "Semantic markup, page structure" },
      { name: "CSS", level: 65, note: "Layouts, styling, responsive design" },
      { name: "JavaScript", level: 60, note: "DOM, interactivity, web basics" },
    ],
  },
  {
    icon: Cpu,
    title: "VLSI & Electronics",
    skills: [
      { name: "Digital Electronics", level: 85 },
      { name: "Analog Electronics", level: 75 },
      { name: "CMOS Fundamentals", level: 75 },
      { name: "VLSI Fundamentals", level: 80 },
      { name: "K-Maps & Logic Design", level: 85 },
      { name: "Combinational & Sequential Circuits", level: 80 },
    ],
  },
  {
    icon: Radio,
    title: "Hardware & IoT",
    skills: [
      { name: "8051 Microcontroller", level: 75 },
      { name: "ESP32", level: 85 },
      { name: "Arduino", level: 85 },
      { name: "Sensors (DHT11/22, MQ Gas, LDR)", level: 80 },
      { name: "Relay Modules & GSM", level: 75 },
    ],
  },
  {
    icon: BrainCircuit,
    title: "Frameworks & Libraries",
    skills: [
      { name: "TensorFlow", level: 70 },
      { name: "MediaPipe", level: 70 },
      { name: "OpenCV", level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: [
      { name: "VS Code / Cursor / Antigravity", level: 85 },
      { name: "GitHub", level: 80 },
      { name: "Arduino IDE", level: 85 },
      { name: "Multisim", level: 70 },
      { name: "ThingSpeak", level: 75 },
      { name: "Cadence", level: 60 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [{ name: "MongoDB", level: 65 }],
  },
];

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      {skill.note && <p className="mt-1 text-xs text-muted-foreground">{skill.note}</p>}
    </div>
  );
}

function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-mono text-xs tracking-widest text-primary">// SKILL MATRIX</h1>
      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">What I work with</h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A blend of software and silicon — from Java, C++, and the web stack to microcontrollers,
        sensors, and VLSI design fundamentals.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <div key={cat.title} className="card-trace rounded-xl p-6">
            <div className="mb-6 flex items-center gap-3">
              <cat.icon className="h-6 w-6 text-copper" />
              <h3 className="text-xl font-semibold">{cat.title}</h3>
            </div>
            <div className="space-y-5">
              {cat.skills.map((s) => (
                <SkillBar key={s.name} skill={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
