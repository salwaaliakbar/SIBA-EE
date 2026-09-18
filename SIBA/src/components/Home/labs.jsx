import Reveal from "../shared/reveal.jsx";
import LabGrid from "../shared/LabGrid.jsx";

export default function Labs() {
  return (
    <section id="labs" className="relative overflow-hidden border-y border-slate-200 bg-[#e9eff5] py-16 sm:py-20">
      {/* Soft decorative color blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#0a2a5e]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-amber-400/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 text-center sm:px-6 lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0a2a5e]/15 bg-[#0a2a5e]/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#0a2a5e]">
            Facilities
          </span>

          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-amber-400" />

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#0a2a5e] sm:text-4xl">
            Our State-of-the-Art Labs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Hands-on facilities equipped to support coursework, research, and
            final year projects across every discipline of electrical
            engineering.
          </p>
        </Reveal>

        <div className="mt-12">
          <LabGrid />
        </div>
      </div>
    </section>
  );
}
