import { Award, BriefcaseBusiness, Building2, GraduationCap } from "lucide-react";
import Reveal from "../shared/reveal.jsx";
import { achievements } from "../../data/achievements.js";

function AchievementCard({ person }) {
  return (
    <article className="group flex h-full flex-col border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg hover:shadow-slate-900/10">
      <div className="flex items-start justify-between gap-3">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-slate-100 transition group-hover:border-amber-100">
          {/* Photos are pre-cropped to face-centred squares by scripts/crop-alumni.py. */}
          <img src={person.image} alt={person.name} className="h-full w-full object-cover" />
        </div>
        <span className="rounded-full bg-[#0a2a5e]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#0a2a5e]">
          {person.category}
        </span>
      </div>

      <h2 className="mt-5 font-serif text-xl font-bold leading-snug text-[#071f47]">{person.name}</h2>

      <div className="mt-3 h-1 w-10 rounded-full bg-amber-400" />

      <ul className="mt-4 flex flex-1 flex-col gap-3 text-sm leading-6">
        <li className="flex gap-2.5">
          <BriefcaseBusiness size={16} strokeWidth={2} className="mt-1 shrink-0 text-amber-600" />
          <span className="font-semibold text-slate-800">{person.position}</span>
        </li>
        <li className="flex gap-2.5">
          <Building2 size={16} strokeWidth={2} className="mt-1 shrink-0 text-amber-600" />
          <span className="text-slate-600">{person.organization}</span>
        </li>
        <li className="flex gap-2.5">
          <GraduationCap size={16} strokeWidth={2} className="mt-1 shrink-0 text-amber-600" />
          <span className="text-slate-600">{person.degree}, Sukkur IBA University</span>
        </li>
        {person.note && (
          <li className="flex gap-2.5">
            <Award size={16} strokeWidth={2} className="mt-1 shrink-0 text-amber-600" />
            <span className="text-slate-600">{person.note}</span>
          </li>
        )}
      </ul>
    </article>
  );
}

export default function Achievements() {
  return (
    <main className="bg-slate-50 text-slate-700">
      <section className="relative overflow-hidden bg-[#071f47] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto max-w-360 px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Students · Alumni</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Student & Alumni Achievements</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              Our graduates are building careers across the power sector, industry, public service, and research. Here are some of
              the milestones they have reached after Sukkur IBA University.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Achievement corner</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Where Our Alumni Are</h2>
            </div>
            <p className="text-sm font-medium text-slate-500">{achievements.length} achievements</p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((person, index) => (
            <Reveal key={person.name} delay={Math.min(index * 0.05, 0.25)}>
              <AchievementCard person={person} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
