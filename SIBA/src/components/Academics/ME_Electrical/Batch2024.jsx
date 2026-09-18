import Reveal from "../../shared/reveal.jsx";

const courseGroups = [
  {
    title: "Core Courses",
    subtitle: "Common to Power Systems and Electronic Systems specializations",
    courses: [
      ["01", "EE-501", "Advanced Control Systems", "3 (3+0)"],
      ["02", "EE-502", "Advanced Power Electronics", "3 (3+0)"],
      ["03", "EE-503", "Applied Machine Learning", "3 (3+0)"],
      ["04", "EE-504", "Research Methodology", "3 (3+0)"],
    ],
  },
  {
    title: "Elective Courses: Power Systems",
    subtitle: "Power Systems specialization",
    courses: [
      ["05", "EE-505", "Advanced Electrical Machines", "3 (3+0)"],
      ["06", "EE-506", "Advanced Power Systems", "3 (3+0)"],
      ["07", "EE-507", "Sustainable Energy Systems", "3 (3+0)"],
    ],
  },
  {
    title: "Elective Courses: Electronic Systems",
    subtitle: "Electronic Systems specialization",
    courses: [
      ["08", "EE-508", "Advanced Digital Signal Processing", "3 (3+0)"],
      ["09", "EE-509", "Advanced VLSI Systems Design", "3 (3+0)"],
      ["10", "EE-510", "Advanced Radio Frequency Circuits Design", "3 (3+0)"],
    ],
  },
  {
    title: "Elective (Common) Courses",
    subtitle: "Common to both specializations",
    courses: [["11", "EE-511", "Advanced Networked Systems", "3 (3+0)"]],
  },
  {
    title: "Additional Elective Courses: Power Systems",
    subtitle: "Additional options for Power Systems specialization",
    courses: [
      ["12", "EE-512", "Electricity Markets", "3 (3+0)"],
      ["13", "EE-513", "Smart Grid Systems", "3 (3+0)"],
    ],
  },
  {
    title: "Additional Elective Courses: Electronic Systems",
    subtitle: "Additional options for Electronic Systems specialization",
    courses: [
      ["14", "EE-514", "Internet of Things Based Systems", "3 (3+0)"],
      ["15", "EE-515", "Satellite Communication and Navigational Aids", "3 (3+0)"],
    ],
  },
];

const semesters = [
  {
    title: "First Semester",
    courses: [
      ["01", "Core-I", "3 (3+0)"],
      ["02", "Elective-I", "3 (3+0)"],
      ["03", "Elective-II", "3 (3+0)"],
    ],
    total: "09 (09+0)",
  },
  {
    title: "Second Semester",
    courses: [
      ["04", "Core-II", "3 (3+0)"],
      ["05", "Elective-III", "3 (3+0)"],
      ["06", "Elective-IV", "3 (3+0)"],
    ],
    total: "09 (09+0)",
  },
  {
    title: "Third Semester",
    courses: [
      ["07", "Core-III", "3 (3+0)"],
      ["08", "Core-IV", "3 (3+0)"],
      ["09", "Thesis-I / Elective-V", "3 (3+0)"],
    ],
    total: "09 (09+0)",
  },
  {
    title: "Fourth Semester",
    courses: [["10", "Thesis-II / Elective-VI", "3 (3+0)"]],
    total: "03 (03+0)",
  },
];

const otherElectives = [
  ["01", "EE-516", "Modeling and Simulation"],
  ["02", "EE-517", "High Voltage DC Transmission"],
  ["03", "EE-518", "Advanced Digital Communication"],
  ["04", "EE-519", "Electronic Materials and Devices"],
  ["05", "EE-520", "IC Design and Packaging Technologies"],
  ["06", "EE-521", "RF MEMS Theory and Application"],
  ["07", "EE-522", "Photovoltaic Power System Design"],
  ["08", "EE-523", "Advanced Mobile and Wireless Communication"],
  ["09", "EE-524", "Swarm Robotics and Bio-Inspired Robotics"],
  ["10", "EE-525", "Advanced Digital Image Processing"],
  ["11", "EE-526", "Power System Analysis and Design"],
  ["12", "EE-527", "Distributed Generation and Smart Grids"],
  ["13", "EE-528", "Robust Control in Power Systems"],
  ["14", "EE-529", "Advanced Power System Protection"],
  ["15", "EE-530", "Power Systems Stability and Control"],
  ["16", "EE-530", "Power Converter Design"],
  ["17", "EE-531", "Digital Control System and Design"],
  ["18", "EE-532", "Fault Diagnosis and Tolerance"],
  ["19", "EE-533", "Transmission and Distribution System Engineering"],
  ["20", "EE-534", "Advanced Computer Networks and Security"],
  ["21", "EE-535", "Advanced Power Conversion"],
  ["22", "EE-536", "Advanced Digital System Design"],
  ["23", "EE-537", "Advanced Topics in RF and Microwave"],
  ["24", "EE-538", "Distributed Generation and Microgrids"],
];

function CourseTable({ courses, showNumber = true }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[650px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
            {showNumber && <th className="px-5 py-4 font-semibold">No.</th>}
            <th className="px-5 py-4 font-semibold">Course code</th>
            <th className="px-5 py-4 font-semibold">Course</th>
            <th className="px-5 py-4 text-center font-semibold">Credit hours</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={`${course[0]}-${course[1]}`} className="border-b border-slate-100 last:border-0">
              {showNumber && <td className="px-5 py-4 font-mono text-xs text-slate-500">{course[0]}</td>}
              <td className="whitespace-nowrap px-5 py-4 font-mono text-xs font-bold text-[#0a2a5e]">{course[1]}</td>
              <td className="px-5 py-4 font-medium text-slate-700">{course[2]}</td>
              <td className="whitespace-nowrap px-5 py-4 text-center font-mono text-xs text-slate-600">{course[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Batch2024() {
  return (
    <main className="bg-slate-50 text-slate-700">
      <section className="relative overflow-hidden bg-[#071f47] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">M.E. Electrical Engineering</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Course schema</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">Master of Engineering in Electrical Engineering, Batch 2024.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <Reveal className="flex max-w-3xl items-start gap-5">
          <div className="hidden h-12 w-1 shrink-0 bg-amber-400 sm:block" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Batch 2024 curriculum</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Structure your specialization</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">Choose between Power Systems and Electronic Systems specializations across core, elective, and thesis pathways.</p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-8">
          <Reveal className="overflow-hidden border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white"><h3 className="font-serif text-2xl font-bold">With thesis</h3></div>
            <div className="grid grid-cols-2 gap-4 p-5 text-sm"><div><p className="font-semibold text-[#0a2a5e]">Core courses</p><p className="mt-1 text-slate-500">04 courses / 12 CH</p></div><div><p className="font-semibold text-[#0a2a5e]">Elective courses</p><p className="mt-1 text-slate-500">04 courses / 12 CH</p></div><div><p className="font-semibold text-[#0a2a5e]">Thesis</p><p className="mt-1 text-slate-500">06 CH</p></div><div><p className="font-semibold text-[#0a2a5e]">Total</p><p className="mt-1 font-bold text-[#071f47]">30 CH</p></div></div>
          </Reveal>
          <Reveal delay={0.08} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white"><h3 className="font-serif text-2xl font-bold">Without thesis</h3></div>
            <div className="grid grid-cols-2 gap-4 p-5 text-sm"><div><p className="font-semibold text-[#0a2a5e]">Core courses</p><p className="mt-1 text-slate-500">04 courses / 12 CH</p></div><div><p className="font-semibold text-[#0a2a5e]">Elective courses</p><p className="mt-1 text-slate-500">04 courses / 12 CH</p></div><div><p className="font-semibold text-[#0a2a5e]">Additional electives</p><p className="mt-1 text-slate-500">02 courses / 06 CH</p></div><div><p className="font-semibold text-[#071f47]">Total</p><p className="mt-1 font-bold text-[#071f47]">30 CH</p></div></div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
          <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Course catalogue</p><h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Titles of courses</h2></Reveal>
          <div className="mt-10 space-y-8">
            {courseGroups.map((group, index) => <Reveal key={group.title} delay={(index % 2) * 0.06} className="overflow-hidden border border-slate-200 shadow-sm"><div className="border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white"><h3 className="font-serif text-xl font-bold">{group.title}</h3><p className="mt-1 text-xs text-blue-100/75">{group.subtitle}</p></div><CourseTable courses={group.courses} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Study plan</p><h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Semester-wise course distribution</h2></Reveal>
        <div className="mt-10 space-y-8">
          {semesters.map((semester, index) => <Reveal key={semester.title} delay={(index % 2) * 0.06} className="overflow-hidden border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white"><h3 className="font-serif text-2xl font-bold">{semester.title}</h3><span className="font-mono text-xs uppercase tracking-wider text-amber-300">{semester.total}</span></div><CourseTable courses={semester.courses} showNumber={false} /></Reveal>)}
        </div>
        <p className="mt-8 border-l-4 border-amber-400 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">In any category, more courses may be added, offered, or replaced subject to relevance and future trends.</p>
      </section>

      <section className="border-t border-slate-200 bg-[#e9eff5]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
          <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Elective pool</p><h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">List of other electives</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">Additional courses available for specialization planning and future offerings.</p></Reveal>
          <Reveal className="mt-10 overflow-hidden border border-slate-200 bg-white shadow-sm"><CourseTable courses={otherElectives.map(([number, code, course]) => [number, code, course, "3 (3+0)"])} /></Reveal>
        </div>
      </section>
    </main>
  );
}
