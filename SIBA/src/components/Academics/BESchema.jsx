	import Reveal from "../shared/reveal.jsx";
const semesters = [
  {
    label: "Semester 1",
    courses: [
      ["CSE-111", "Information and Communication Technologies", "Computing", 2, 1],
      ["ELE-111", "Workshop Practice", "EE Foundation", 0, 1],
      ["HUM-101", "Functional English", "Humanities", 3, 0],
      ["HUM-111/2", "Islamiat", "Natural Science", 2, 0],
      ["MSC-101", "Calculus and Analytical Geometry", "Natural Science", 3, 0],
      ["PHY-111", "Applied Physics", "Natural Science", 3, 1],
    ],
    total: [13, 3, 16],
  },
  {
    label: "Semester 2",
    courses: [
      ["HUM-202", "Communication & Presentation Skills", "Humanities", 3, 0],
      ["MSC-208", "Linear Algebra & Differential Equations", "Natural Science", 3, 0],
      ["HUM-113/4", "Fehm e Quran-I/Comparative Religion-I", "Natural Sciences", 0, 1],
      ["SSC-101", "Pakistan Studies", "Humanities", 2, 0],
      ["ELE-121", "Linear Circuit Analysis", "EE Foundation", 3, 1],
      ["CSE-121", "Programming for Engineers", "Computing", 2, 1],
      ["CSE-122", "Computer Aided Design", "EE Foundation", 0, 1],
    ],
    total: [13, 4, 17],
  },
  {
    label: "Semester 3",
    courses: [
      ["MSC-202", "Multivariate Calculus", "Natural Science", 3, 0],
      ["ESE-211", "Digital Logic Design", "EE Foundation", 3, 1],
      ["ELE-211", "Electrical Network Analysis", "EE Foundation", 3, 1],
      ["ESE-212", "Electronic Devices and Circuits", "EE Foundation", 3, 1],
      ["HUM-211/2", "Fehm e Quran-II/Comparative Religion-II", "Humanities", 0, 1],
      ["CSE-211", "Object Oriented Programming", "Computing", 2, 1],
    ],
    total: [14, 5, 19],
  },
  {
    label: "Semester 4",
    courses: [
      ["MSC-207", "Complex Variables & Transforms", "Natural Science", 3, 0],
      ["ELE-221", "Electromagnetics Field Theory", "Core (Breadth)", 3, 0],
      ["SSC-102", "Ideology and Constitution of Pakistan", "Humanities", 2, 0],
      ["ESE-221", "Embedded Systems", "EE Foundation", 3, 1],
      ["MGT-221", "Engineering Economics & Management", "Management Science", 3, 0],
      ["CSC-221", "Computer Communication Network", "IDEE-1", 3, 1],
    ],
    total: [17, 2, 19],
  },
  {
    label: "Semester 5",
    courses: [
      ["MSC-203", "Probability & Statistics", "EE Foundation", 3, 0],
      ["ELE-311/ESE-311", "Elective-I", "Core (Breadth)", 3, 1],
      ["ELE-312", "Signals and Systems", "EE Foundation", 3, 1],
      ["ELE-222", "Electrical Machines", "Core (Breadth)", 3, 1],
      ["ELE-313", "Instrumentation & Measurement", "EE Foundation", 3, 1],
    ],
    total: [15, 4, 19],
  },
  {
    label: "Semester 6",
    courses: [
      ["ESE-321", "Elective II", "Core (Breadth)", 3, 1],
      ["ELE-322", "Communication Systems", "Core (Breadth)", 3, 1],
      ["CSE-321", "Artificial Intelligence", "IDEE-II", 3, 0],
      ["ELE-323", "Control Systems", "Core (Breadth)", 3, 1],
    ],
    total: [15, 4, 19],
  },
  {
    label: "Semester 7",
    courses: [
      ["ELE-411/ESE-411", "Elective III", "Elective - III", 3, 1],
      ["HUM-411", "Technical Writing", "Humanities", 2, 0],
      ["ELE-412/ESE-412", "Elective IV", "Core (Depth)", 3, 1],
      ["ELE-413/ESE-413", "Elective V", "Core (Depth)", 3, 0],
      ["CSE-411", "Eletive VI", "Core (Depth)", 0, 1],
      ["ELE-419", "Final Year Project-I", "FYP", 0, 2],
    ],
    total: [11, 5, 16],
  },
  {
    label: "Semester 8",
    courses: [
      ["ELE-421/ESE-421", "Elective VII", "Core (Depth)", 3, 1],
      ["ELE-422/ESE-422", "Electie VIII", "Core (Depth)", 3, 1],
      ["MGT-421", "Project Management", "Management Science", 2, 0],
      ["ELE-429", "Final Year Project-II", "FYP", 0, 4],
    ],
    total: [8, 6, 14],
  },
];

const overall = { teaching: 104, lab: 32, grand: 136 };

const prerequisites = [
  ["MSC-202", "Multivariate Calculus", "MSC-208"],
  ["ELE-312", "Electrical Machines", "ELE-211"],
  [
    "ELE-311/ESE-311",
    "Power Generation/Electronic Circuit Design",
    "ELE-222/ESE-211",
  ],
];

export default function BESchema() {
  return (
    <main className="bg-slate-50 text-slate-700">
      <section className="relative overflow-hidden bg-[#071f47] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-6 sm:py-18 lg:px-10 lg:py-20">
          <Reveal className="max-w-4xl">
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
              B.E. Electrical Engineering
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Course schema
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              Bachelor of Engineering in Electrical Engineering, Batch Fall 2025
              (2K25).
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <Reveal className="flex max-w-3xl items-start gap-5">
          <div className="hidden h-12 w-1 shrink-0 bg-amber-400 sm:block" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">
              Curriculum at a glance
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">
              Eight semesters, one engineering journey
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Explore the courses, knowledge areas, and contact hours that make
              up the B.E. Electrical Engineering program.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-8">
          {semesters.map(({ label, courses, total }, index) => (
            <Reveal
              key={label}
              delay={(index % 2) * 0.05}
              className="overflow-hidden border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white sm:px-6">
                <h3 className="font-serif text-2xl font-bold">{label}</h3>
                <span className="font-mono text-xs uppercase tracking-wider text-amber-300">
                  Total CHs: {total[0]} + {total[1]} = {total[2]}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
                      <th className="px-5 py-4 font-semibold">Course code</th>
                      <th className="px-5 py-4 font-semibold">Subject</th>
                      <th className="px-5 py-4 font-semibold">
                        Knowledge area
                      </th>
                      <th className="px-5 py-4 text-center font-semibold">
                        CHs teaching
                      </th>
                      <th className="px-5 py-4 text-center font-semibold">
                        CHs labs
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map(([code, subject, area, teaching, lab]) => (
                      <tr
                        key={code}
                        className="border-b border-slate-100 last:border-0"
                      >
                        <td className="whitespace-nowrap px-5 py-4 font-mono text-xs font-bold text-[#0a2a5e]">
                          {code}
                        </td>
                        <td className="px-5 py-4 font-medium text-slate-700">
                          {subject}
                        </td>
                        <td className="px-5 py-4 text-slate-500">{area}</td>
                        <td className="px-5 py-4 text-center font-mono text-xs text-slate-600">
                          {teaching}
                        </td>
                        <td className="px-5 py-4 text-center font-mono text-xs text-slate-600">
                          {lab}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-slate-200 bg-slate-50 font-semibold text-[#071f47]">
                      <td className="px-5 py-4" colSpan={3}>
                        Total CHs
                      </td>
                      <td className="px-5 py-4 text-center font-mono text-xs">
                        {total[0]}
                      </td>
                      <td className="px-5 py-4 text-center font-mono text-xs">
                        {total[1]}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3">
          {[
            ["Overall CHs (Teaching)", overall.teaching],
            ["Overall CHs (Labs)", overall.lab],
            ["Grand Credit Hours (CHs)", overall.grand],
          ].map(([name, value]) => (
            <div key={name} className="bg-white px-5 py-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {name}
              </p>
              <p className="mt-2 font-serif text-3xl font-bold text-[#071f47]">
                {value}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 lg:px-6 lg:py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">
            Planning ahead
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">
            Pre-requisite list
          </h2>
        </Reveal>
        <Reveal className="mt-8 overflow-x-auto border border-slate-200 bg-white">
          <table className="w-full min-w-160px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
                <th className="px-5 py-4 font-semibold">Course code</th>
                <th className="px-5 py-4 font-semibold">Subject</th>
                <th className="px-5 py-4 font-semibold">Pre-requisite</th>
              </tr>
            </thead>
            <tbody>
              {prerequisites.map(([code, subject, prerequisite]) => (
                <tr
                  key={code}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="px-5 py-4 font-mono text-xs font-bold text-[#0a2a5e]">
                    {code}
                  </td>
                  <td className="px-5 py-4 font-medium text-slate-700">
                    {subject}
                  </td>
                  <td className="px-5 py-4 font-mono text-xs text-slate-600">
                    {prerequisite}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>
    </main>
  );
}
