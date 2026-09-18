import { FlaskConical } from "lucide-react";
import Reveal from "../shared/reveal.jsx";
import LabGrid from "../shared/LabGrid.jsx";
import { laboratories } from "../shared/labs.jsx";

export default function LabInfrastructure() {
	return (
		<main className="bg-slate-50">
			<section className="relative overflow-hidden bg-[#0a2a5e] px-5 pb-16 pt-20 sm:px-6 sm:pb-20 lg:px-10">
				<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "22px 22px" }} />
				<div className="relative mx-auto max-w-[1440px]">
					<Reveal>
						<span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
							<FlaskConical size={15} /> Department facilities
						</span>
						<h1 className="mt-5 max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
							Laboratory Infrastructure
						</h1>
						<p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/80 sm:text-lg">
							State-of-the-art laboratories supporting practical learning, applied research, and innovation across Electrical Engineering.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="px-5 py-14 sm:px-6 sm:py-20 lg:px-10">
				<div className="mx-auto max-w-[1440px]">
					<Reveal>
						<div className="flex items-end justify-between gap-5 border-b border-slate-200 pb-5">
							<div>
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">Explore our facilities</p>
								<h2 className="mt-2 font-serif text-3xl font-bold text-[#0a2a5e] sm:text-4xl">Our laboratories</h2>
							</div>
							<span className="hidden text-sm font-medium text-slate-500 sm:block">{laboratories.length} facilities</span>
						</div>
					</Reveal>

					<div className="mt-8">
						<LabGrid columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" />
					</div>
				</div>
			</section>
		</main>
	);
}
