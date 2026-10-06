import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  Megaphone,
  Phone,
  ScrollText,
  X,
} from "lucide-react";
import Reveal from "../shared/reveal.jsx";
import {
  admissionLinks,
  admissionsOffice,
  cycleMonths,
  eligibility,
  pathwayGroups,
  pathways,
  posters,
  requiredDocuments,
  selectionSteps,
} from "../../data/admissions.js";

const dateFormatter = new Intl.DateTimeFormat("en-US", { month: "long", day: "2-digit", year: "numeric" });

const formatDate = (isoDate) => dateFormatter.format(new Date(`${isoDate}T00:00:00`));

const isOpen = (isoDate) => new Date(`${isoDate}T23:59:59`) >= new Date();

const inRange = (index, [from, to]) => index >= from && index <= to;

const externalProps = { target: "_blank", rel: "noreferrer" };

const groupedPathways = pathwayGroups.map((group) => ({
  ...group,
  pathways: group.ids.map((id) => pathways.find((pathway) => pathway.id === id)),
}));

const quickLinks = [
  { label: "Admission Procedure", note: "Eligibility, selection & enrolment (PDF)", to: admissionLinks.procedure, icon: ClipboardList },
  { label: "Admission Policy", note: "Sukkur IBA University policy (PDF)", to: admissionLinks.policy, icon: ScrollText },
  { label: "Fee Structure", note: "Main Campus 2025-26 (PDF)", to: admissionLinks.feeStructure, icon: FileText },
  { label: "Admission Announcements", note: "Advertisements, sample papers & merit lists", to: admissionLinks.announcements, icon: Megaphone },
];

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="border-b border-slate-200 pb-5">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl font-bold text-[#0a2a5e] sm:text-4xl">{title}</h2>
      {children && <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{children}</p>}
    </div>
  );
}

function CycleCalendar() {
  return (
    <div className="mt-8 overflow-x-auto bg-white shadow-sm">
      <div className="min-w-[760px] p-5 sm:p-7">
        <div className="grid grid-cols-[220px_repeat(12,minmax(0,1fr))] gap-1 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          <span />
          {cycleMonths.map((month) => (
            <span key={month} className="pb-2">{month}</span>
          ))}
        </div>

        {groupedPathways.map((group) => (
          <div key={group.title}>
            <p className="border-t border-slate-200 pb-1 pt-4 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">{group.title}</p>
            {group.pathways.map((pathway) => (
              <a
                key={pathway.id}
                href={`#${pathway.id}`}
                className="group grid grid-cols-[220px_repeat(12,minmax(0,1fr))] items-center gap-1 border-t border-slate-100 py-2"
              >
                <span className="pr-3 text-left text-sm font-semibold leading-5 text-[#071f47] group-hover:text-amber-600">
                  {pathway.name.replace(/ \(.*\)$/, "")}
                </span>
                {cycleMonths.map((month, index) => {
                  let cellClass = "bg-slate-100";
                  if (inRange(index, pathway.test)) cellClass = "bg-[#0a2a5e]";
                  else if (inRange(index, pathway.apply)) cellClass = "bg-amber-300";
                  else if (inRange(index, pathway.classes)) cellClass = "bg-emerald-500/80";
                  return <span key={month} className={`h-7 ${cellClass}`} />;
                })}
              </a>
            ))}
          </div>
        ))}

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-4 text-xs font-medium text-slate-600">
          <span className="inline-flex items-center gap-2"><span className="h-3 w-5 bg-amber-300" /> Applications open</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-5 bg-[#0a2a5e]" /> Admission test</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-5 bg-emerald-500/80" /> Classes begin</span>
        </div>
      </div>
    </div>
  );
}

function PathwayCard({ pathway, index }) {
  const latest = pathway.cycles[pathway.cycles.length - 1];
  const open = isOpen(latest.lastDate);

  return (
    <Reveal delay={Math.min(index * 0.04, 0.2)}>
      <article id={pathway.id} className="grid scroll-mt-28 overflow-hidden bg-white shadow-sm lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)]">
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#0a2a5e]/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0a2a5e]">{pathway.level}</span>
            <span className="bg-amber-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-700">{pathway.route}</span>
            {open && (
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Open · closes {formatDate(latest.lastDate)}
              </span>
            )}
          </div>

          <h3 className="mt-4 font-serif text-2xl font-bold text-[#071f47]">{pathway.name}</h3>
          <p className="mt-1 text-sm font-medium text-slate-500">{pathway.programs}</p>

          <p className="mt-5 inline-flex items-start gap-2 text-sm font-semibold text-[#0a2a5e]">
            <CalendarDays size={17} strokeWidth={1.8} className="mt-0.5 shrink-0 text-amber-600" />
            Expected window: {pathway.window}
          </p>

          <ul className="mt-5 space-y-2.5">
            {pathway.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 size={17} strokeWidth={1.8} className="mt-0.5 shrink-0 text-amber-500" />
                {point}
              </li>
            ))}
          </ul>

          {pathway.link && (
            <Link to={pathway.link.url} {...externalProps} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a2a5e] hover:text-amber-600">
              {pathway.link.label} <ExternalLink size={14} />
            </Link>
          )}
        </div>

        <aside className="border-t border-slate-100 bg-slate-50/80 p-6 sm:p-8 lg:border-l lg:border-t-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Recent cycles</p>
          <div className="mt-4 space-y-4">
            {[...pathway.cycles].reverse().map((cycle, cycleIndex) => {
              const isLatest = cycleIndex === 0;
              return (
                <div
                  key={cycle.label}
                  className={`border-l-4 bg-white p-4 shadow-sm ${isLatest ? "border-amber-400" : "border-slate-200"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-serif text-lg font-bold text-[#071f47]">{cycle.label}</p>
                    {isLatest && (
                      <span className="bg-[#0a2a5e] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">Latest</span>
                    )}
                  </div>
                  <dl className="mt-3 space-y-2 text-sm">
                    {[
                      { label: "Apply by", value: formatDate(cycle.lastDate), icon: CalendarDays },
                      { label: "Admission test", value: cycle.test, icon: ClipboardList },
                      { label: "Classes", value: cycle.classes, icon: GraduationCap },
                    ].map(({ label, value, icon: Icon }) => (
                      <div key={label} className="flex items-center gap-3">
                        <Icon size={15} strokeWidth={1.8} className="shrink-0 text-amber-600" />
                        <dt className="w-28 shrink-0 text-slate-500">{label}</dt>
                        <dd className="font-semibold text-[#071f47]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              );
            })}
          </div>
        </aside>
      </article>
    </Reveal>
  );
}

function PosterLightbox({ index, onClose, onStep }) {
  const poster = posters[index];

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onStep(1);
      if (event.key === "ArrowLeft") onStep(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onStep]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030d1f]/90 p-4" role="dialog" aria-modal="true" aria-label={poster.title} onClick={onClose}>
      <button type="button" onClick={onClose} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-white/10 text-white hover:bg-white/20" aria-label="Close poster">
        <X size={20} />
      </button>
      <button type="button" onClick={(event) => { event.stopPropagation(); onStep(-1); }} className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white hover:bg-white/20 sm:left-6" aria-label="Previous poster">
        <ChevronLeft size={22} />
      </button>
      <button type="button" onClick={(event) => { event.stopPropagation(); onStep(1); }} className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white hover:bg-white/20 sm:right-6" aria-label="Next poster">
        <ChevronRight size={22} />
      </button>

      <figure className="flex max-h-full flex-col items-center" onClick={(event) => event.stopPropagation()}>
        <img src={poster.image} alt={poster.title} className="max-h-[80vh] w-auto max-w-full object-contain shadow-2xl" />
        <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-sm text-blue-100">
          <span className="font-semibold text-white">{poster.title}</span>
          <Link to={poster.pdf} {...externalProps} className="inline-flex items-center gap-1.5 font-semibold text-amber-300 hover:text-amber-200">
            Original PDF <ExternalLink size={14} />
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}

function PosterGallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const step = (direction) => setActiveIndex((current) => (current + direction + posters.length) % posters.length);

  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {posters.map((poster, index) => (
          <Reveal key={poster.title} delay={Math.min(index * 0.04, 0.2)}>
            <button type="button" onClick={() => setActiveIndex(index)} className="group block w-full bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                <img src={poster.image} alt={poster.title} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-3.5">
                <p className="text-sm font-semibold leading-5 text-[#071f47]">{poster.title}</p>
                <p className="mt-1 text-xs text-slate-500">{poster.caption}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      {activeIndex !== null && <PosterLightbox index={activeIndex} onClose={() => setActiveIndex(null)} onStep={step} />}
    </>
  );
}

function Sidebar() {
  return (
    <aside className="space-y-6">
      <div className="relative overflow-hidden bg-[#071f47] p-7 text-white">
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10" />
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center bg-amber-400 text-[#071f47]">
            <GraduationCap size={24} strokeWidth={1.8} />
          </div>
          <h2 className="mt-5 font-serif text-2xl font-bold">Ready to apply?</h2>
          <p className="mt-2 text-sm leading-6 text-blue-100/75">All admission rounds — direct test, foundation, STHP, NTHP, ME and PhD — use the same online portal.</p>
          <Link to={admissionLinks.applyOnline} {...externalProps} className="group mt-6 flex items-center justify-center gap-2 bg-amber-400 px-5 py-3 text-sm font-semibold text-[#071f47] transition hover:bg-amber-300">
            Apply Online
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Documents & links</p>
        <ul className="mt-4 divide-y divide-slate-100">
          {quickLinks.map(({ label, note, to, icon: Icon }) => (
            <li key={label}>
              <Link to={to} {...externalProps} className="group flex items-start gap-3 py-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#0a2a5e]/5 text-[#0a2a5e] group-hover:bg-amber-400 group-hover:text-[#071f47]">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-[#071f47] group-hover:text-amber-600">
                    {label} <ExternalLink size={13} className="opacity-60" />
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">{note}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Admissions office</p>
        <div className="mt-4 space-y-3 text-sm text-slate-700">
          {admissionsOffice.phones.map((phone) => (
            <Link key={phone} to={`tel:${phone.replace(/-/g, "")}`} className="flex items-center gap-3 hover:text-[#0a2a5e]">
              <Phone size={16} strokeWidth={1.8} className="text-amber-600" /> {phone}
            </Link>
          ))}
          <Link to={`mailto:${admissionsOffice.email}`} className="flex items-center gap-3 break-all hover:text-[#0a2a5e]">
            <Mail size={16} strokeWidth={1.8} className="shrink-0 text-amber-600" /> {admissionsOffice.email}
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default function Admissions() {
  return (
    <main className="bg-slate-50 text-slate-700">
      <section className="relative overflow-hidden bg-[#071f47] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Department of Electrical Engineering</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Admissions</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              Every route into Electrical Engineering at Sukkur IBA University — direct aptitude tests, the foundation semester,
              the STHP and NTHP scholarship programs, and graduate admissions — with the timeline you can expect each year.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={admissionLinks.applyOnline} {...externalProps} className="group inline-flex items-center gap-2 bg-amber-400 px-6 py-3 text-sm font-semibold text-[#071f47] transition hover:bg-amber-300">
                Apply Online
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="#timeline" className="inline-flex items-center gap-2 border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <CalendarDays size={16} /> View timeline
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] space-y-20 px-5 py-14 sm:px-6 sm:py-20 lg:px-10">
        {/* Only the timeline sits beside the sidebar; everything after it uses the full width. */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <section id="timeline" className="min-w-0 scroll-mt-28">
            <Reveal>
              <SectionHeading eyebrow="Admission calendar" title="Expected timeline">
                Based on the 2025 and 2026 admission cycles. Exact dates change every year, so always confirm with the official
                advertisement on the admissions announcements page.
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.08}>
              <CycleCalendar />
            </Reveal>
          </section>

          <Sidebar />
        </div>

        <div className="min-w-0 space-y-20">
          <section id="pathways" className="scroll-mt-28">
            <Reveal>
              <SectionHeading eyebrow="Ways to join" title="Admission pathways">
                Undergraduate students enter either directly through the aptitude test, or through a foundation semester (regular,
                STHP or NTHP) where a GPA of 2.2 or above leads to degree admission.
              </SectionHeading>
            </Reveal>
            <div className="mt-8 space-y-12">
              {groupedPathways.map((group) => (
                <div key={group.title}>
                  <Reveal className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-l-4 border-amber-400 pl-4">
                    <h3 className="font-serif text-2xl font-bold text-[#0a2a5e]">{group.title}</h3>
                    <p className="text-sm font-medium text-slate-500">{group.subtitle}</p>
                  </Reveal>
                  <div className="mt-5 space-y-6">
                    {group.pathways.map((pathway, index) => (
                      <PathwayCard key={pathway.id} pathway={pathway} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="eligibility" className="scroll-mt-28">
            <Reveal>
              <SectionHeading eyebrow="Who can apply" title="Eligibility criteria" />
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {eligibility.map((item, index) => (
                <Reveal key={item.program} delay={index * 0.06} className="bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-bold text-[#071f47]">{item.program}</h3>
                  <ul className="mt-4 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-6 text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="process" className="scroll-mt-28">
            <Reveal>
              <SectionHeading eyebrow="How it works" title="Selection process" />
            </Reveal>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {selectionSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05} className="relative bg-white p-5 shadow-sm">
                  <span className="font-serif text-3xl font-bold text-amber-400">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-base font-semibold text-[#071f47]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </Reveal>
              ))}
            </ol>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                ["Undergraduate documents", requiredDocuments.undergraduate],
                ["Graduate documents", requiredDocuments.graduate],
              ].map(([title, documents]) => (
                <Reveal key={title} className="border-l-4 border-amber-400 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0a2a5e]">{title}</h3>
                  <ul className="mt-4 space-y-2">
                    {documents.map((document) => (
                      <li key={document} className="flex gap-2.5 text-sm leading-6 text-slate-700">
                        <CheckCircle2 size={16} strokeWidth={1.8} className="mt-1 shrink-0 text-emerald-600" />
                        {document}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </section>


          <section id="posters" className="scroll-mt-28">
            <Reveal>
              <SectionHeading eyebrow="Previous announcements" title="2025 admission posters">
                Official advertisements from the 2025 intake. Select a poster to view it full size.
              </SectionHeading>
            </Reveal>
            <PosterGallery />
          </section>
        </div>
      </div>
    </main>
  );
}
