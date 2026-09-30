import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../shared/reveal.jsx";
import { ArrowUpRight, BookOpen, Check, ChevronRight, FileText, PlayCircle } from "lucide-react";
import FYPTable from "./FYPTable.jsx";
import { fypBatches } from "../../data/fyps.js";

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
	const [activeId, setActiveId] = useState(() => {
		const hash = window.location.hash.slice(1);
		return fypBatches.some((batch) => batch.id === hash) ? hash : fypBatches[0].id;
	});
	const activeBatch = fypBatches.find((batch) => batch.id === activeId);

	const selectBatch = (id) => {
		setActiveId(id);
		window.history.replaceState(null, "", `#${id}`);
	};

	return (
		<main className="bg-slate-50 text-slate-700">
			<section className="relative overflow-hidden bg-[#071f47] text-white">
				<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
				<div className="relative mx-auto max-w-360 px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
					<Reveal className="max-w-3xl">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Research and innovation</p>
						<h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Final Year Projects</h1>
						<p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">A record of undergraduate projects completed by the Department of Electrical Engineering, organised by academic session.</p>
					</Reveal>
				</div>
			</section>

			<section id={activeBatch.id} className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
				<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_270px] lg:items-start lg:gap-10">
				<Reveal key={activeBatch.id}>
					<FYPTable batch={activeBatch} />
				</Reveal>

				<Reveal delay={0.08} className="self-start">
					<aside aria-label="FYP archive and resources" className="h-fit space-y-5">
						<div className="rounded-xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.35)]">
							<div className="flex items-center justify-between border-b border-slate-100 pb-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Explore</p><h2 className="mt-1 font-serif text-2xl font-bold text-[#071f47]">FYP archives</h2></div><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700"><FileText size={17} /></span></div>
							<nav className="mt-4 space-y-2" aria-label="FYP archive years">
								{fypBatches.map((batch) => {
									const isActive = batch.id === activeId;
									return (
										<button key={batch.id} type="button" onClick={() => selectBatch(batch.id)} aria-current={isActive ? "true" : undefined} className={`flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left text-sm transition ${isActive ? "border-amber-200/80 bg-amber-50/80 font-semibold text-amber-950" : "border-slate-100 bg-slate-50/70 font-medium text-slate-600 hover:border-amber-200/70 hover:bg-amber-50/40"}`}>
											{isActive ? <Check size={16} className="shrink-0 text-amber-600" /> : <span className="h-4 w-4 shrink-0 rounded-full border-2 border-slate-300" />}
											<span className="flex-1">{batch.label}</span>
											<ChevronRight size={16} className={isActive ? "text-amber-600" : "text-slate-400"} />
										</button>
									);
								})}
							</nav>
						</div>

						<div className="rounded-xl border border-sky-100 bg-sky-50/80 p-5 text-slate-700 shadow-[0_12px_30px_-22px_rgba(14,116,144,0.35)]">
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Project toolkit</p>
							<h2 className="mt-2 font-serif text-2xl font-bold text-[#071f47]">Plan your FYP</h2>
							<p className="mt-3 text-sm leading-6 text-slate-600">Browse the department resources for project planning, documentation, and presentations.</p>
							<div className="mt-5 space-y-2">
								{resources.map(({ label, description, href, icon: Icon }) => (
									<Link key={label} to={href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-sky-100/90 bg-white/75 px-3 py-3 transition hover:border-sky-200 hover:bg-white">
										<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700"><Icon size={16} /></span>
										<span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-slate-700">{label}</span><span className="mt-0.5 block text-xs text-slate-500">{description}</span></span><ArrowUpRight size={15} className="shrink-0 text-slate-400 transition group-hover:text-sky-600" />
									</Link>
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
