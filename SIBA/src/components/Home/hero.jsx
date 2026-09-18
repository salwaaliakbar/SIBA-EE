import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CalendarDays,
  Users,
  Rocket,
  Globe2,
} from "lucide-react";
import iabImg from "../../assets/hero/iab.png";
import fypImg from "../../assets/hero/fyp.png";
import globalVillageImg from "../../assets/hero/global-village.png";

const slides = [
  {
    tag: "Event",
    icon: Users,
    title: "Industrial Advisory Board Meeting 2026",
    description:
      "Faculty and industry leaders convened to align the department's curriculum with evolving industry needs and emerging technologies.",
    date: "February 2026",
    image: iabImg,
  },
  {
    tag: "Student Projects",
    icon: Rocket,
    title: "Final Year Projects Exhibition",
    description:
      "Graduating students showcased innovative engineering solutions to real-world problems, judged by academia and industry professionals.",
    date: "January 2026",
    image: fypImg,
  },
  {
    tag: "Campus Life",
    icon: Globe2,
    title: "Global Village 2026",
    description:
      "Students and faculty celebrated cultural diversity through exhibitions, performances, and collaborative activities across campus.",
    date: "December 2025",
    image: globalVillageImg,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (paused) return undefined;

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearTimeout(timeoutRef.current);
  }, [current, paused]);

  const goTo = (index) => {
    setCurrent((index + slides.length) % slides.length);
  };

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <section
      className="relative h-[620px] w-full overflow-hidden bg-[#071b3d] sm:h-[660px] lg:h-[620px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Latest achievements and activities"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.title}
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#061936]/95 via-[#061936]/65 to-[#061936]/20" />
          <div className="absolute inset-0 bg-linear-to-t from-[#061936]/75 via-transparent to-[#061936]/15" />

          <div className="relative mx-auto flex h-full max-w-[1440px] items-end px-5 pb-46 pt-12 sm:px-6 sm:pb-50 lg:px-10 lg:pb-46">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="min-w-0 max-w-2xl"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                <Icon size={13} strokeWidth={2} />
                {slide.tag}
              </span>

              <div className="mt-3 h-1 w-10 rounded-full bg-amber-400" />

              <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {slide.title}
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                {slide.description}
              </p>

              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white/65">
                <CalendarDays size={14} strokeWidth={2} />
                {slide.date}
              </div>

              <button
                type="button"
                className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0a2a5e] transition-colors hover:bg-amber-400"
              >
                Read More
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls: prev / dots / next */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4 sm:bottom-6">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((s, index) => (
            <button
              key={s.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current ? "w-7 bg-white" : "w-1.5 bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
