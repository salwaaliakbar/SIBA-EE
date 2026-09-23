import Reveal from "../../shared/reveal.jsx";
import PhDCourseList from "./PhDCourseList.jsx";

const distribution = [
	["Courses", "06", "18 Credit Hours"],
	["Thesis/Dissertations", "--", "30 Credit Hours"],
	["Tafheem Ul Quran-I", "01", "1(0+1) Credit Hours"],
	["Tafheem Ul Quran-II", "01", "1(0+1) Credit Hours"],
];

const semesters = [
	{
		title: "First Semester",
		courses: [
			["01", "", "Course-I", "3(3+0)"],
			["02", "", "Course-II", "3(3+0)"],
			["03", "", "Course-III", "3(3+0)"],
			["04", "", "Tafheem Ul Quran-I", "1(0+1)"],
		],
		total: "10(09+1)",
	},
	{
		title: "Second Semester",
		courses: [
			["01", "", "Course-IV", "3(3+0)"],
			["02", "", "Course-V", "3(3+0)"],
			["03", "", "Course-VI", "3(3+0)"],
			["04", "", "Tafheem Ul Quran-II", "1(0+1)"],
		],
		total: "10(09+1)",
		note: "Comprehensive/Qualifying Examination*: Paper-I Research Aptitude, Paper-II Rest of the Courses * Students can appear for proposal defense only after passing this examination.",
	},
	{
		title: "Third Semester",
		courses: [["01", "", "Thesis-I", "3(3+0)"]],
		total: "03(03+0)",
	},
	{
		title: "Fourth Semester",
		courses: [["01", "", "Thesis-II", "9(09+0)"]],
		total: "9(09+0)",
	},
	{
		title: "Fifth Semester",
		courses: [["01", "", "Thesis-III", "9(09+0)"]],
		total: "9(09+0)",
	},
	{
		title: "Sixth Semester",
		courses: [["01", "", "Thesis-IV", "9(09+0)"]],
		total: "9(09+0)",
	},
];

const grandTotal = "50(48+2)";

function SemesterCard({ semester, index }) {
	return (
		<Reveal delay={(index % 2) * 0.05} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
			<div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white">
				<h3 className="font-serif text-2xl font-bold">{semester.title}</h3>
				<span className="font-mono text-xs uppercase tracking-wider text-amber-300">Total Credit Hours: {semester.total}</span>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full min-w-[560px] border-collapse text-left text-sm">
					<thead>
						<tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
							<th className="px-5 py-4 font-semibold">Serial Number</th>
							<th className="px-5 py-4 font-semibold">Course Code</th>
							<th className="px-5 py-4 font-semibold">Course</th>
							<th className="px-5 py-4 text-center font-semibold">Credit hours</th>
						</tr>
					</thead>
					<tbody>
						{semester.courses.map(([number, code, title, credits]) => (
							<tr key={`${number}-${title}`} className="border-b border-slate-100 last:border-0">
								<td className="px-5 py-4 font-mono text-xs text-slate-500">{number}</td>
								<td className="whitespace-nowrap px-5 py-4 font-mono text-xs font-bold text-[#0a2a5e]">{code}</td>
								<td className="px-5 py-4 font-medium text-slate-700">{title}</td>
								<td className="whitespace-nowrap px-5 py-4 text-center font-mono text-xs text-slate-600">{credits}</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr className="border-t border-slate-200 bg-slate-50 font-semibold text-[#071f47]">
							<td className="px-5 py-4" colSpan={3}>Total Credit Hours</td>
							<td className="whitespace-nowrap px-5 py-4 text-center font-mono text-xs">{semester.total}</td>
						</tr>
					</tfoot>
				</table>
			</div>
			{semester.note && <p className="border-t border-slate-200 bg-amber-50 p-5 text-sm leading-7 text-slate-700">{semester.note}</p>}
		</Reveal>
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

export default function Batch2026Onward() {
	return (
		<main className="bg-slate-50 text-slate-700">
			<section className="relative overflow-hidden bg-[#071f47] text-white">
				<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
				<div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
					<Reveal className="max-w-4xl">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">PhD Electrical Engineering</p>
						<h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Course schema</h1>
						<p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">Course Schema of PhD. (Electrical Engineering) - Batch 2026 and onwards</p>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
				<SectionHeading eyebrow="Credit hours" title="Number of courses and thesis credit hours" />
				<Reveal className="mt-10 max-w-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
					<div className="overflow-x-auto">
						<table className="w-full min-w-[420px] border-collapse text-left text-sm">
							<tbody>
								{distribution.map(([category, count, hours]) => (
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
									<td className="px-5 py-4">50 Credit Hours</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</Reveal>
			</section>

			<section className="border-y border-slate-200 bg-white">
				<div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
					<SectionHeading eyebrow="Study plan" title="Semester wise course Distribution" />
					<div className="mt-10 space-y-8">
						{semesters.map((semester, index) => <SemesterCard key={semester.title} semester={semester} index={index} />)}
					</div>
					<Reveal className="mt-8 flex flex-wrap items-center justify-between gap-3 border border-slate-200 bg-[#071f47] px-5 py-4 text-white shadow-sm">
						<span className="font-serif text-xl font-bold">Grand Credit Hours</span>
						<span className="font-mono text-sm font-bold text-amber-300">{grandTotal}</span>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
				<PhDCourseList eyebrow="Batch 2026 and onwards" />
			</section>
		</main>
	);
}
