import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Award, Radio, Microscope, ArrowRight } from "lucide-react";
import Reveal from "../shared/reveal.jsx";

const programs = [
  {
    icon: GraduationCap,
    level: "Undergraduate",
    title: "B.E. Electrical Engineering",
    description: "A 4-year PEC-accredited bachelor's degree building strong foundations across power, electronics, and computing.",
    to: "/academics/undergraduate/be-electrical-engineering/course-schema",
  },
  {
    icon: Award,
    level: "Graduate",
    title: "M.E. Electrical Engineering",
    description: "An advanced master's program for engineers looking to specialize and lead in the power and energy sector.",
    to: "/academics/postgraduate/me-electrical-engineering/batch-2026",
  },
  {
    icon: Radio,
    level: "Graduate",
    title: "M.E. Electronics & Communications",
    description: "A focused master's track covering communication systems, embedded design, and signal processing.",
    to: "/academics/postgraduate/me-electronic-communication/from-2025",
  },
  {
    icon: Microscope,
    level: "Doctoral",
    title: "PhD. Electrical Engineering",
    description: "A research-intensive doctorate for those pursuing original contributions to electrical engineering.",
    to: "/academics/postgraduate/phd-electrical-engineering/batch-2026-and-onwards",
  },
];

export default function Programs() {
  return (
    <section className="relative overflow-hidden bg-[#0a2a5e] py-16 sm:py-20">
      {/* Soft decorative color blobs */}
      <div className="pointer-events-none absolute -top-16 right-0 h-80 w-80 rounded-full bg-amber-400/[0.1] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#0a2a5e]/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 text-center sm:px-6 lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0a2a5e]/15 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
            Programs
          </span>

          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-amber-400" />

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            Choose Your Path
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100/80 sm:text-base">
            From undergraduate foundations to doctoral research, find the
            program that fits where you want to go next.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={program.to}
                  className="flex h-full flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#0a2a5e]/20 hover:shadow-lg hover:shadow-slate-900/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0a2a5e]/[0.06] text-[#0a2a5e]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <span className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-amber-600">
                    {program.level}
                  </span>

                  <h3 className="mt-1.5 font-serif text-lg font-bold leading-snug text-[#0a2a5e]">
                    {program.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {program.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a2a5e]">
                    Learn More
                    <ArrowRight
                      size={15}
                      strokeWidth={2}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
