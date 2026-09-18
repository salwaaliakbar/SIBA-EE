import Reveal from "../../shared/reveal.jsx";

function CourseTable({ courses }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[650px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
            <th className="px-5 py-4 font-semibold">No.</th>
            <th className="px-5 py-4 font-semibold">Course code</th>
            <th className="px-5 py-4 font-semibold">Course</th>
            <th className="px-5 py-4 text-center font-semibold">Credit hours</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(([number, code, title, credits]) => (
            <tr key={`${number}-${code}-${title}`} className="border-b border-slate-100 last:border-0">
              <td className="px-5 py-4 font-mono text-xs text-slate-500">{number}</td>
              <td className="whitespace-nowrap px-5 py-4 font-mono text-xs font-bold text-[#0a2a5e]">{code || "-"}</td>
              <td className="px-5 py-4 font-medium text-slate-700">{title}</td>
              <td className="whitespace-nowrap px-5 py-4 text-center font-mono text-xs text-slate-600">{credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MESchemaPage({ programme = "M.E. Electrical Engineering", batch, total, courseGroups, semesters = [], allCourses }) {
  return (
    <main className="bg-slate-50 text-slate-700">
      <section className="relative overflow-hidden bg-[#071f47] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">{programme}</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Course schema</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">{programme}, {batch}.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <Reveal className="flex max-w-3xl items-start gap-5">
          <div className="hidden h-12 w-1 shrink-0 bg-amber-400 sm:block" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">{batch} curriculum</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Course distribution</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">Core, elective, thesis, and additional course pathways for the {programme} programme.</p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-8">
          {courseGroups.map((group, index) => (
            <Reveal key={group.title} delay={(index % 2) * 0.05} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white">
                <h3 className="font-serif text-2xl font-bold">{group.title}</h3>
                {group.subtitle && <p className="mt-1 text-xs text-blue-100/75">{group.subtitle}</p>}
              </div>
              {group.courses ? <CourseTable courses={group.courses} /> : <div className="grid gap-4 p-5 text-sm sm:grid-cols-2">{group.items.map(([label, value]) => <div key={label}><p className="font-semibold text-[#0a2a5e]">{label}</p><p className="mt-1 text-slate-500">{value}</p></div>)}</div>}
            </Reveal>
          ))}
        </div>
      </section>

      {semesters.length > 0 && (
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
            <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Study plan</p><h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Semester-wise course distribution</h2></Reveal>
            <div className="mt-10 space-y-8">{semesters.map((semester, index) => <Reveal key={semester.title} delay={(index % 2) * 0.05} className="overflow-hidden border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white"><h3 className="font-serif text-2xl font-bold">{semester.title}</h3><span className="font-mono text-xs uppercase tracking-wider text-amber-300">{semester.total}</span></div><CourseTable courses={semester.courses} />{semester.note && <p className="border-t border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">{semester.note}</p>}</Reveal>)}</div>
            <p className="mt-8 border-l-4 border-amber-400 bg-slate-50 p-5 text-sm leading-7 text-slate-600">In any category, more courses may be added, offered, or replaced subject to relevance and future trends. Total: {total}.</p>
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 bg-[#e9eff5]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
          <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Elective pool</p><h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">List of all courses</h2></Reveal>
          <Reveal className="mt-10 overflow-hidden border border-slate-200 bg-white shadow-sm"><CourseTable courses={allCourses} /></Reveal>
        </div>
      </section>
    </main>
  );
}
