import {
	ArrowRight,
	GraduationCap,
	Target,
} from "lucide-react";
import Reveal from "../shared/reveal.jsx";

const specializations = [
	"Telecommunication Engineering",
	"Electronics Engineering",
	"Power Engineering"
];

export default function AboutDep() {
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
				<div className="relative mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-18 lg:px-10 lg:py-20">
					<Reveal className="max-w-3xl">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
							About the department
						</p>
						<h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Engineering knowledge with purpose.
						</h1>
						<p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
							The Department of Electrical Engineering brings engineering techniques and skills into the unique spirit of Sukkur IBA University.
						</p>
					</Reveal>
				</div>
			</section>

			<section id="about-department" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
					  <Reveal id="vision-mission">
						<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-[#071f47]">
							<Target size={24} strokeWidth={1.8} />
						</div>
						<p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">
							Our foundation
						</p>
						<h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">
							About the Department
						</h2>
					</Reveal>

					<Reveal className="space-y-5 text-base leading-8 text-slate-600">
						<p>
							Department of Electrical Engineering was established with the vision of incorporating engineering techniques and skills within unique spirit of Sukkur IBA, an institution oriented towards quality education and credible degree, having indispensable interdepartmental collaboration.
						</p>
						<p>
							The BE in Electrical Engineering degree is based on the HEC/PEC approved curriculum. In the first year, the students learn the fundamentals of Electrical Engineering supported by essential Mathematics and Physics courses. These courses are followed by foundation and breadth courses which introduce students to different specialties in Electrical Engineering. In the senior years, students choose a specialization stream and study advanced courses. Currently specializations are offered in four areas, i.e. Telecommunication Engineering, Electronics Engineering, Power Engineering and Computer Systems Engineering. In the highly competitive job market, a young engineer is not only required to be knowledgeable in technical areas but also expected to have excellent communication and managerial skills and an appreciation of everyday economics to design and implement cost effective engineering solution. During four years, students work in twelve different labs where they perform experiments using state of the art instruments, equipment and simulation software.
						</p>
						<p>
							The Department maintains high standard of education and research through continuous assessment and periodic tests, quizzes, seminars and field projects. To enhance professional and academic standard of the faculty as well as students, the department has established close links with professional organizations at national and international levels.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="border-y border-slate-200 bg-white">
				<div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
					<Reveal className="rounded-2xl bg-[#071f47] p-7 text-white sm:p-9">
						<div className="flex items-center gap-3">
							<GraduationCap size={25} strokeWidth={1.8} className="text-amber-300" />
							<h3 className="font-serif text-2xl font-bold">Specialization streams</h3>
						</div>
						<div className="mt-7 space-y-3">
							{specializations.map((specialization) => (
								<div key={specialization} className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm text-blue-100/85 last:border-0">
									<ArrowRight size={16} className="shrink-0 text-amber-300" />
									{specialization}
								</div>
							))}
						</div>
					</Reveal>
				</div>
			</section>
		</main>
	);
}
