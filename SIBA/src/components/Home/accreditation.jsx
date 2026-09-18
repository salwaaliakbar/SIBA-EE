import { ArrowRight } from "lucide-react";
import Reveal from "../shared/reveal.jsx";

const stats = [
  { value: "Level-2", label: "PEC Accreditation Status" },
  { value: "2024", label: "Accredited Since" },
  { value: "100%", label: "Curriculum Compliance" },
];

export default function Accreditation() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-[#f5f7fb] py-12 sm:py-16">
      {/* Circuit-board texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0a2a5e 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-6 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Accreditation
          </span>

          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-amber-400" />

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#0a2a5e] sm:text-4xl">
            Pakistan Engineering Council Level-2 Accredited Program
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Our Bachelor of Engineering program is formally recognized by the
            Pakistan Engineering Council, reflecting our commitment to rigorous
            academic standards, qualified faculty, and a curriculum aligned
            with industry needs.
          </p>
        </Reveal>

        {/* Stat bar */}
        <Reveal
          delay={0.15}
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-4 sm:py-2">
              <p className="font-serif text-2xl font-bold text-[#0a2a5e] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.25}>
          <button
            type="button"
            className="group mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0a2a5e] transition-colors hover:bg-blue-50"
          >
            View Accreditation Certificate
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
