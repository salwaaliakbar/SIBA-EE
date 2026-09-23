import Reveal from "../../shared/reveal.jsx";
import { phdCourses, phdCredits } from "./PhDCourses.js";

export default function PhDCourseList({ eyebrow }) {
	return (
		<>
			<Reveal>
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">{eyebrow}</p>
				<h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">List of all courses</h2>
			</Reveal>
			<Reveal className="mt-10 overflow-hidden border border-slate-200 bg-white shadow-sm">
				<div className="border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white">
					<h3 className="font-serif text-xl font-bold">Courses:</h3>
					<p className="mt-1 text-xs text-blue-100/75">PhD in Electrical Engineering</p>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full min-w-[650px] border-collapse text-left text-sm">
						<thead>
							<tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
								<th className="px-5 py-4 font-semibold">S.No.</th>
								<th className="px-5 py-4 font-semibold">Course Code</th>
								<th className="px-5 py-4 font-semibold">Course</th>
								<th className="px-5 py-4 text-center font-semibold">Credit Hours</th>
							</tr>
						</thead>
						<tbody>
							{phdCourses.map(([number, code, title]) => (
								<tr key={`${number}-${code}-${title}`} className="border-b border-slate-100 last:border-0">
									<td className="px-5 py-4 font-mono text-xs text-slate-500">{number}</td>
									<td className="whitespace-nowrap px-5 py-4 font-mono text-xs font-bold text-[#0a2a5e]">{code}</td>
									<td className="px-5 py-4 font-medium text-slate-700">{title}</td>
									<td className="whitespace-nowrap px-5 py-4 text-center font-mono text-xs text-slate-600">{phdCredits}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Reveal>
			<p className="mt-8 border-l-4 border-amber-400 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">More courses can be added/offered/replaced subject to relevance, future trends etc.</p>
		</>
	);
}
