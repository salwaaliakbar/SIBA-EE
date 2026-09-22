import Reveal from "../shared/reveal.jsx";
import { faculty, staff } from "../../data/facultyStaff.js";

function PersonCard({ person, isFaculty = false }) {
  const Icon = person.icon;

  return (
    <article className="group flex h-full flex-col border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg hover:shadow-slate-900/10">
      <div className="relative mx-auto h-32 w-32 shrink-0 sm:h-36 sm:w-36">
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full rounded-full border-4 border-slate-100 object-cover transition group-hover:border-amber-100"
        />
        {!isFaculty && Icon && (
          <span className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-amber-400 text-[#0a2a5e]">
            <Icon size={14} strokeWidth={2.2} />
          </span>
        )}
      </div>
      <div className="mt-5 flex flex-1 flex-col text-center">
        <h2 className="font-serif text-lg font-bold leading-snug text-[#071f47]">{person.name}</h2>
        <p className="mt-2 text-sm font-semibold text-amber-700">{isFaculty ? person.title : person.role}</p>
        {isFaculty && person.subtitle && <p className="mt-1 text-xs leading-5 text-slate-500">{person.subtitle}</p>}
      </div>
    </article>
  );
}

export default function FacultyStaff() {
  return (
    <main className="bg-slate-50 text-slate-700">
      <section className="relative overflow-hidden bg-[#071f47] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto max-w-360 px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">People of the department</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Faculty & Staff</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">Meet the educators, researchers, engineers, and coordinators who support learning and innovation in Electrical Engineering.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Academic leadership</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Our Faculty</h2>
            </div>
            <p className="text-sm font-medium text-slate-500">{faculty.length} faculty members</p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {faculty.map((person, index) => <Reveal key={person.name} delay={Math.min(index * 0.05, 0.25)}><PersonCard person={person} isFaculty /></Reveal>)}
        </div>

        <Reveal className="mt-20">
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Department operations</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Our Staff</h2>
            </div>
            <p className="text-sm font-medium text-slate-500">{staff.length} staff members</p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {staff.map((person, index) => <Reveal key={person.name} delay={Math.min(index * 0.05, 0.25)}><PersonCard person={person} /></Reveal>)}
        </div>
      </section>
    </main>
  );
}
