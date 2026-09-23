import Reveal from "../../shared/reveal.jsx";

const three = "3(3+0)";
const one = "1(0+1)";

const distributions = [
  {
    title: "With thesis",
    rows: [
      ["Core Courses", "04", "12 Credit Hours"],
      ["Elective Courses", "04", "12 Credit Hours"],
      ["Tafheem Ul Quran-I", "01", "1 (0+1) Credit Hours"],
      ["Tafheem Ul Quran-II", "01", "1 (0+1) Credit Hours"],
      ["Thesis", "--", "06 Credit Hours"],
    ],
    total: "32 Credit Hours",
  },
  {
    title: "Without thesis",
    rows: [
      ["Core Courses", "04", "12 Credit Hours"],
      ["Elective Courses", "04", "12 Credit Hours"],
      ["Tafheem Ul Quran-I", "01", "1 (0+1) Credit Hours"],
      ["Tafheem Ul Quran-II", "01", "1 (0+1) Credit Hours"],
      ["Additional Elective Courses", "02", "06 Credit Hours"],
    ],
    total: "32 Credit Hours",
  },
];

const courseGroups = [
  {
    title: "Core Courses",
    subtitle: "ME Electrical Engineering",
    courses: [
      ["01", "EE-701", "Advanced Control Systems", three],
      ["02", "EE-702", "Advanced Power Electronics", three],
      ["03", "EE-703", "Applied Machine learning", three],
      ["04", "EE-704", "Research Methodology", three],
      ["05", "", "Tafheem Ul Quran-I", one],
      ["06", "", "Tafheem Ul Quran-II", one],
    ],
  },
  {
    title: "Elective Courses",
    subtitle: "ME Electrical Engineering",
    courses: [
      ["05", "EE-705", "Advanced Electrical Machines", three],
      ["06", "EE-706", "Advanced Power Systems", three],
      ["07", "EE-707", "Sustainable Energy Systems", three],
      ["08", "EE-739", "Advanced Communication Networks", three],
    ],
  },
  {
    title: "Additional Elective Courses",
    subtitle: "ME Electrical Engincering",
    courses: [
      ["9", "EE-712", "Electricity Markets", three],
      ["10", "EE-713", "Smart Grid Systems", three],
    ],
  },
];

const semesters = [
  {
    title: "First Semester",
    courses: [
      ["01", "", "Core-I", three],
      ["02", "", "Core-II", three],
      ["03", "", "Elective-I", three],
      ["04", "", "Tafheem Ul Quran-I", one],
    ],
    total: "10(09+1)",
  },
  {
    title: "Second Semester",
    courses: [
      ["01", "", "Core-III", three],
      ["02", "", "Elective-II", three],
      ["03", "", "Elective-III", three],
      ["04", "", "Tafheem Ul Quran-II", one],
    ],
    total: "10(09+1)",
  },
  {
    title: "Third Semester",
    courses: [
      ["01", "", "Core-IV", three],
      ["02", "", "Elective-IV", three],
      ["03", "", "Thesis-l/Elective-V", three],
    ],
    total: "09(09+0)",
  },
  {
    title: "Fourth Semester",
    courses: [["10", "", "Thesis-II /Elective-VI", three]],
    total: "32(30+2)",
  },
];

const otherElectives = [
  ["01", "EE-700", "ME Thesis", "6(6+0)"],
  ["02", "EE-701", "Advanced Control System", three],
  ["03", "EE-702", "Advanced Power Electronics", three],
  ["04", "EE-703", "Applied Machine Learning", three],
  ["05", "EE-704", "Research Methodology", three],
  ["06", "EE-705", "Advanced Electrical Machines", three],
  ["07", "EE-706", "Advanced Power Systems", three],
  ["08", "EE-707", "Sustainable Energy Systems", three],
  ["09", "EE-708", "Advanced Digital Signal Processing", three],
  ["10", "EE-709", "Advanced VLSI Design", three],
  ["11", "EE-710", "Advanced Radio Frequency Circuit Design", three],
  ["12", "EE-711", "Advanced Networked Systems", three],
  ["13", "EE-712", "Electricity Markets", three],
  ["14", "EE-713", "Smart Grid Systems", three],
  ["15", "EE-714", "Internet of Things Based Systems", three],
  ["16", "EE-715", "Satellite Communication and Navigational Aids", three],
  ["17", "EE-716", "Modeling and Simulation", three],
  ["18", "EE-717", "High Voltage DC Transmission", three],
  ["19", "EE-718", "Advanced Digital Communication", three],
  ["20", "EE-719", "Electronic Materials and devices", three],
  ["21", "EE-720", "IC Design and Packaging Technologies", three],
  ["22", "EE-721", "RF MEMS Theory and Application", three],
  ["23", "EE-722", "Photovoltaic Power system Design", three],
  ["24", "EE-723", "Advanced Mobile and Wireless Communication", three],
  ["25", "EE-724", "Swarm Robotics and Bio Inspired Robotics", three],
  ["26", "EE-725", "Advanced Digital Image Processing", three],
  ["27", "EE-726", "Power System Analysis and Design", three],
  ["28", "EE-727", "Distributed Generation and Smart Grids", three],
  ["29", "EE-728", "Robust Control in Power Systems", three],
  ["30", "EE-729", "Advance Power System Protection", three],
  ["31", "EE-730", "Power Systems Stability and Control", three],
  ["32", "EE-731", "Power Converter Design", three],
  ["33", "EE-732", "Digital Control system and Design", three],
  ["34", "EE-733", "Transmission and Distribution System Engineering", three],
  ["35", "EE-734", "Advanced Computer Networks and Security", three],
  ["36", "EE-735", "Advanced Power Conversion", three],
  ["37", "EE-736", "Advanced Digital System Design", three],
  ["38", "EE-737", "Advanced Topics in RF and Microwave", three],
  ["39", "EE-738", "Distributed Generation and Microgrids", three],
  ["40", "EE-739", "Advanced Communication Networks", three],
  ["41", "EE-740", "Advanced Integrated Circuits", three],
  ["42", "EE-741", "Advanced Satellite Communication", three],
  ["43", "EE-742", "Advanced Nano Technologies", three],
  ["44", "EE-743", "Computer Vision", three],
  ["45", "EE-744", "Autonomous Vehicle Systems", three],
  ["46", "EE-745", "Advanced Optical Communication Systems", three],
  ["47", "EE-746", "Information and Coding theory", three],
  ["48", "EE-747", "Wireless Sensor Networks", three],
  ["49", "EE-748", "Signal Detection and Estimation", three],
  ["50", "EE-749", "Radio Frequency Identification (RFID) Systems", three],
  ["51", "EE-750", "Analysis of Algorithms", three],
  ["52", "EE-751", "Optimization Techniques", three],
  ["53", "EE-752", "Advanced Probability and Stochastic Processes", three],
  ["54", "EE-753", "Professional Leadership Development", three],
];

function CourseTable({ courses, total }) {
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
              <td className="whitespace-nowrap px-5 py-4 font-mono text-xs font-bold text-[#0a2a5e]">{code}</td>
              <td className="px-5 py-4 font-medium text-slate-700">{title}</td>
              <td className="whitespace-nowrap px-5 py-4 text-center font-mono text-xs text-slate-600">{credits}</td>
            </tr>
          ))}
        </tbody>
        {total && (
          <tfoot>
            <tr className="border-t border-slate-200 bg-slate-50 font-semibold text-[#071f47]">
              <td className="px-5 py-4" colSpan={3}>Total Credit Hours</td>
              <td className="whitespace-nowrap px-5 py-4 text-center font-mono text-xs">{total}</td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">{title}</h2>
    </Reveal>
  );
}

export default function Batch2026() {
  return (
    <main className="bg-slate-50 text-slate-700">
      <section className="relative overflow-hidden bg-[#071f47] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">M.E. Electrical Engineering</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Course schema</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">Course Schema of M.E. (Electrical Engineering) - Batch 2026 and onwards</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <SectionHeading eyebrow="Batch 2026 and onwards" title="Course Distribution into categories" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {distributions.map((dist, index) => (
            <Reveal key={dist.title} delay={index * 0.08} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white"><h3 className="font-serif text-2xl font-bold">{dist.title}</h3></div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <tbody>
                    {dist.rows.map(([category, count, hours]) => (
                      <tr key={category} className="border-b border-slate-100">
                        <td className="px-5 py-4 font-medium text-slate-700">{category}</td>
                        <td className="px-5 py-4 text-center font-mono text-xs text-slate-600">{count}</td>
                        <td className="px-5 py-4 text-slate-600">{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-50 font-semibold text-[#071f47]">
                      <td className="px-5 py-4">Total</td>
                      <td className="px-5 py-4" />
                      <td className="px-5 py-4">{dist.total}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
          <SectionHeading eyebrow="Course catalogue" title="Titles of courses" />
          <div className="mt-10 space-y-8">
            {courseGroups.map((group, index) => (
              <Reveal key={group.title} delay={(index % 2) * 0.05} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white">
                  <h3 className="font-serif text-xl font-bold">{group.title}:</h3>
                  <p className="mt-1 text-xs text-blue-100/75">{group.subtitle}</p>
                </div>
                <CourseTable courses={group.courses} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <SectionHeading eyebrow="Study plan" title="Semester wise Course Distribution" />
        <div className="mt-10 space-y-8">
          {semesters.map((semester, index) => (
            <Reveal key={semester.title} delay={(index % 2) * 0.05} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white">
                <h3 className="font-serif text-2xl font-bold">{semester.title}</h3>
                <span className="font-mono text-xs uppercase tracking-wider text-amber-300">Total Credit Hours: {semester.total}</span>
              </div>
              <CourseTable courses={semester.courses} total={semester.total} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 border-l-4 border-amber-400 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">In any category more courses can be added/offered/replaced subject to relevance, future trends etc.</p>
      </section>

      <section className="border-t border-slate-200 bg-[#e9eff5]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
          <SectionHeading eyebrow="Electives" title="List of other electives" />
          <Reveal className="mt-10 overflow-hidden border border-slate-200 bg-white shadow-sm"><CourseTable courses={otherElectives} /></Reveal>
        </div>
      </section>
    </main>
  );
}
