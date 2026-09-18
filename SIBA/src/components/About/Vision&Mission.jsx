import { Eye, Target } from "lucide-react";
import Reveal from "../shared/reveal.jsx";

export default function VisionMission() {
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
				<div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
					<Reveal className="max-w-3xl">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
							Department of Electrical Engineering
						</p>
						<h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Vision &amp; Mission
						</h1>
						<p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
							The direction and purpose guiding the Department of Electrical Engineering at Sukkur IBA University.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-24">
				<Reveal className="border-t-4 border-amber-400 bg-white p-7 shadow-sm sm:p-10">
					<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-[#071f47]">
						<Eye size={25} strokeWidth={1.8} />
					</div>
					<p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">
						Vision of the Department
					</p>
					<h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47]">Vision</h2>
					<p className="mt-6 text-base leading-8 text-slate-600">
						The vision of DoEE is to produce employable engineers in the areas of Electronics, Power and Telecommunication engineering, par excellence having cognizance for entrepreneurship and research.
					</p>
				</Reveal>

				<Reveal className="border-t-4 border-[#0a2a5e] bg-white p-7 shadow-sm sm:p-10">
					<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a2a5e] text-white">
						<Target size={25} strokeWidth={1.8} />
					</div>
					<p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">
						Mission of the Department
					</p>
					<h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47]">Mission</h2>
					<p className="mt-6 text-base leading-8 text-slate-600">
						The mission of DoEE is to produce engineering graduates possessing sound analytical and communication skills, thorough knowledge of contemporary scientific methods, tools and techniques necessary for solving research and applied engineering problems coupled with a clear outlook for entrepreneurship and commercialization.
					</p>
				</Reveal>
			</section>
		</main>
	);
}
