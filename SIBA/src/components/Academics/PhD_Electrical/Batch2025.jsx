import Reveal from "../../shared/reveal.jsx";
import PhDCourseList from "./PhDCourseList.jsx";

export default function Batch2025() {
	return (
		<main className="bg-slate-50 text-slate-700">
			<section className="relative overflow-hidden bg-[#071f47] text-white">
				<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
				<div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
					<Reveal className="max-w-4xl">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">PhD Electrical Engineering</p>
						<h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Course schema</h1>
						<p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">Course Schema of PhD. (Electrical Engineering) - Batch 2025</p>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
				<PhDCourseList eyebrow="Batch 2025" />
			</section>
		</main>
	);
}
