import { ArrowRight, PhoneCall } from "lucide-react";
import Reveal from "../shared/reveal.jsx";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2a5e] via-[#123a78] to-[#0a2a5e] py-16 sm:py-20">
      {/* Circuit-board texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Soft decorative color blobs */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-amber-400/[0.1] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-6 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Admissions
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            Ready to Begin Your Engineering Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100/80 sm:text-base">
            Applications for our undergraduate and graduate programs are open.
            Take the next step toward a career in electrical engineering.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-[#0a2a5e] transition-colors hover:bg-amber-300"
          >
            Apply Now
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <PhoneCall size={16} strokeWidth={2} />
            Contact Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
