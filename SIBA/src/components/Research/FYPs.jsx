import Reveal from "../shared/reveal.jsx";
import { ArrowUpRight, BookOpen, Check, ChevronRight, FileText, PlayCircle } from "lucide-react";

const projects = [
	{
		supervisor: "Dr. Jamshed Ansari",
		coSupervisor: "Dr. Jahangir Badar",
		title: "Optimized Converter Design for reduced power losses in Real-time PHIL Setup",
		members: ["Saqib Baloch (033-21-0040)", "Ahtsham Ullah (033-21-0005)"],
	},
	{
		supervisor: "Dr. Sharjeel Afridi",
		coSupervisor: "Dr. Safeer Hyder",
		title: "AI-based Attendance System: A Hardware Prototype Design",
		members: ["Abdul Rafay (033-21-0020)", "Hafeez Ullah Shaikh (033-21-0011)", "Shoaib Khan (033-21-0018)"],
	},
	{
		supervisor: "Dr. Yameen Sandhu",
		coSupervisor: "Ms. Lubina Irum",
		title: "Complex Multi-resonator Coaxial-ring resonator filter",
		members: ["Muhammad Burhan (033-21-0009)", "Saeed Ur Rehman (033-21-0045)"],
	},
	{
		supervisor: "Dr Abdul Aziz Memon",
		coSupervisor: "",
		title: "AI based Multimodal Home Automation System for disabled individuals using Voice and Sign Language Recognition",
		members: ["Muhammad Shayan (033-21-0004)", "Sumaira Parveen (033-21-0027)", "Komal (033-21-0023)"],
	},
	{
		supervisor: "Dr. Fida Hussain",
		coSupervisor: "Engr. Veer Bhan",
		title: "Design and Implementation of Power Management System for local Industries in Pakistan",
		members: ["Muhammad Hamza Qamar (033-21-0033)", "Muhammad Salaam Bashir (033-20-0002)"],
	},
	{
		supervisor: "Dr. Fida Hussain",
		coSupervisor: "",
		title: "Optical Detection of Biomakers using Raman Scattering Technique",
		members: ["Muhammad Ahsan Ali Soomro (033-21-0037)", "Abdul Bari (033-21-0028)", "Zohaib Ahmed (033-21-0024)"],
	},
	{
		supervisor: "Dr. Fida Hussain",
		coSupervisor: "",
		title: "Real-time and online monitoring System for Microphysiological Sensor Integrated System",
		members: ["Muhammad Saqlain (033-20-0011)", "Faizan Ahmed (033-20-0032)", "Wakeel Ahmed (033-19-0026)"],
	},
	{
		supervisor: "Dr. Qasim",
		coSupervisor: "Engr. Umar Abdul Majeed",
		title: "Design of small PM Motor",
		members: ["Abdul Wajid (033-21-0001)", "Hassan Ali (033-21-0043)", "Saeed Abbasi (033-21-0006)"],
	},
	{
		supervisor: "Dr. Jamshed Ansari",
		coSupervisor: "Dr. Jahangir Badar",
		title: "Design and Development of a Power Quality Analyzer with Hardware-in-Loop Testing Capabilities",
		members: ["Ali Hasnain", "Moula Bux", "Abdullah Alias Arslan"],
	},
];

const resources = [
	{
		label: "FYP Handbook",
		description: "Department reference guide",
		href: "https://ee.iba-suk.edu.pk/downloads/fyp_handbook.pdf",
		icon: BookOpen,
	},
	{
		label: "Guidelines - FYP",
		description: "Project process and requirements",
		href: "https://ee.iba-suk.edu.pk/downloads/fyp_guidelines.pdf",
		icon: FileText,
	},
	{
		label: "Guidelines - FYP Videos",
		description: "Video instruction resource",
		href: "https://ee.iba-suk.edu.pk/downloads/FYP%20video%20instructions.pdf",
		icon: PlayCircle,
	},
];

export default function FYPs() {
	return (
		<main className="bg-slate-50 text-slate-700">
			<section className="relative overflow-hidden bg-[#071f47] text-white">
				<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
				<div className="relative mx-auto max-w-360 px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
					<Reveal className="max-w-3xl">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Research and innovation</p>
						<h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Final Year Projects</h1>
						<p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">A record of undergraduate projects completed by the Department of Electrical Engineering in Fall 2021.</p>
					</Reveal>
				</div>
			</section>

			<section id="fall-2021" className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
				<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_270px] lg:items-start lg:gap-10">
				<Reveal>
					<div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
						<div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Project archive</p><h2 className="mt-2 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">FYP Fall-2021</h2></div>
						<p className="text-sm font-medium text-slate-500">{projects.length} project groups</p>
					</div>
					<div className="hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_10px_28px_-24px_rgba(15,23,42,0.4)] md:block">
						<table className="w-full table-fixed border-collapse text-left text-sm">
							<colgroup><col className="w-[7%]" /><col className="w-[19%]" /><col className="w-[19%]" /><col className="w-[31%]" /><col className="w-[24%]" /></colgroup>
							<thead className="bg-sky-50/80 text-xs uppercase tracking-[0.12em] text-slate-600">
								<tr><th className="border-r border-sky-100 px-3 py-4">No.</th><th className="border-r border-sky-100 px-3 py-4">Supervisor</th><th className="border-r border-sky-100 px-3 py-4">Co-Supervisor</th><th className="border-r border-sky-100 px-3 py-4">Project title</th><th className="px-3 py-4">Group members</th></tr>
							</thead>
							<tbody className="divide-y divide-slate-100">
								{projects.map((project, index) => (
									<tr key={project.title} className="align-top odd:bg-white even:bg-slate-50/45 transition-colors hover:bg-amber-50/45">
										<td className="wrap-break-word border-r border-slate-100 px-3 py-5 font-serif text-xl font-bold text-amber-600">{index + 1}</td>
										<td className="wrap-break-word border-r border-slate-100 px-3 py-5 font-semibold leading-6 text-[#071f47]">{project.supervisor}</td>
										<td className="wrap-break-word border-r border-slate-100 px-3 py-5 leading-6 text-slate-600">{project.coSupervisor || "-"}</td>
										<td className="wrap-break-word border-r border-slate-100 px-3 py-5 font-medium leading-6 text-slate-700">{project.title}</td>
										<td className="wrap-break-word px-3 py-5 leading-6 text-slate-600"><ul className="space-y-1">{project.members.map((member) => <li key={member}>{member}</li>)}</ul></td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="space-y-3 md:hidden">
						{projects.map((project, index) => (
							<article key={project.title} className="border border-slate-200 bg-white p-4 shadow-sm">
								<div className="flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center bg-amber-400 font-serif font-bold text-[#071f47]">{index + 1}</span><h3 className="wrap-break-word pt-1 text-sm font-bold leading-5 text-[#071f47]">{project.title}</h3></div>
								<div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 text-sm leading-5"><div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Supervisor</p><p className="mt-1 font-semibold text-slate-700">{project.supervisor}</p></div><div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Co-Supervisor</p><p className="mt-1 text-slate-600">{project.coSupervisor || "-"}</p></div><div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Group members</p><ul className="mt-1 space-y-1 text-slate-600">{project.members.map((member) => <li key={member}>{member}</li>)}</ul></div></div>
							</article>
						))}
					</div>
				</Reveal>

				<Reveal delay={0.08} className="self-start lg:sticky lg:top-28 lg:h-fit">
					<aside aria-label="FYP archive and resources" className="h-fit space-y-5">
						<div className="rounded-xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.35)]">
							<div className="flex items-center justify-between border-b border-slate-100 pb-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Explore</p><h2 className="mt-1 font-serif text-2xl font-bold text-[#071f47]">FYP archives</h2></div><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700"><FileText size={17} /></span></div>
							<nav className="mt-4 space-y-2" aria-label="FYP archive years">
								<a href="#fall-2021" className="flex items-center gap-3 rounded-lg border border-amber-200/80 bg-amber-50/80 px-3 py-3 text-sm font-semibold text-amber-950"><Check size={16} className="shrink-0 text-amber-600" /><span className="flex-1">FYP Fall-2021</span><ChevronRight size={16} className="text-amber-600" /></a>
								<div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/70 px-3 py-3 text-sm text-slate-400"><span className="h-4 w-4 shrink-0 rounded-full border-2 border-slate-300" /><span className="flex-1">FYP Fall-2022</span><span className="text-[10px] font-bold uppercase tracking-wider">Soon</span></div>
							</nav>
						</div>

						<div className="rounded-xl border border-sky-100 bg-sky-50/80 p-5 text-slate-700 shadow-[0_12px_30px_-22px_rgba(14,116,144,0.35)]">
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Project toolkit</p>
							<h2 className="mt-2 font-serif text-2xl font-bold text-[#071f47]">Plan your FYP</h2>
							<p className="mt-3 text-sm leading-6 text-slate-600">Browse the department resources for project planning, documentation, and presentations.</p>
							<div className="mt-5 space-y-2">
								{resources.map(({ label, description, href, icon: Icon }) => (
									<a key={label} href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-sky-100/90 bg-white/75 px-3 py-3 transition hover:border-sky-200 hover:bg-white">
										<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700"><Icon size={16} /></span>
										<span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-slate-700">{label}</span><span className="mt-0.5 block text-xs text-slate-500">{description}</span></span><ArrowUpRight size={15} className="shrink-0 text-slate-400 transition group-hover:text-sky-600" />
									</a>
								))}
							</div>
						</div>
					</aside>
				</Reveal>
				</div>
			</section>
		</main>
	);
}
