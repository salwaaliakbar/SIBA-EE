import {
	ArrowRight,
	BookOpenCheck,
	Check,
	Compass,
	GraduationCap,
	Users,
} from "lucide-react";
import Reveal from "../shared/reveal.jsx";

const objectives = [
	{
		id: "PEO-1",
		label: "Professional and scholarly excellence",
		text: "Graduates pursuing lifelong learning, making their mark through professional, academic, and scholarly excellence.",
		icon: GraduationCap,
	},
	{
		id: "PEO-2",
		label: "Effective interdisciplinary teamwork",
		text: "Graduates with appropriate interpersonal skills leading or contributing as an effective team member in an interdisciplinary work environment.",
		icon: Users,
	},
	{
		id: "PEO-3",
		label: "Ethical professional practice",
		text: "Graduates cognizant of societal needs, conduct their profession in a moral and ethical manner.",
		icon: Compass,
	},
];

const outcomes = [
	["PLO-1", "Engineering Knowledge", "Apply knowledge of mathematics, natural science, engineering fundamentals, and engineering specialization to the solution of complex engineering problems."],
	["PLO-2", "Problem Analysis", "Identify, formulate, conduct research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences."],
	["PLO-3", "Design/Development of Solutions", "An ability to design solutions for complex engineering problems and design systems, components, or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations."],
	["PLO-4", "Investigation", "Conduct investigation of complex engineering problems using research-based knowledge and research methods, including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions."],
	["PLO-5", "Tool Usage", "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modeling, to complex engineering problems, with an understanding of the limitations."],
	["PLO-6", "The Engineer and the World", "Analyze and evaluate sustainable development impacts to society, the economy, sustainability, health and safety, legal frameworks, and the environment while solving complex engineering problems."],
	["PLO-7", "Ethics", "Apply ethical principles and commit to professional ethics and norms of engineering practice and adhere to relevant national and international laws. Demonstrate an understanding of the need for diversity and inclusion."],
	["PLO-8", "Individual and Collaborative Team Work", "Function effectively as an individual, and as a member or leader in diverse and inclusive teams and in multi-disciplinary, face-to-face, remote and distributed settings."],
	["PLO-9", "Communication", "Communicate effectively and inclusively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation and make effective presentations, taking into account cultural, language, and learning differences."],
	["PLO-10", "Project Management and Finance", "Demonstrate knowledge and understanding of engineering management principles and economic decision-making and apply these to one's own work, as a member and leader in a team, to manage projects in multidisciplinary environments."],
	["PLO-11", "Lifelong Learning", "Recognize the need for, and have the preparation and ability for independent and life-long learning, adaptability to new and emerging technologies, and critical thinking in the broadest context of technological change."],
];

const mapping = {
	"PEO-1": ["PLO-1", "PLO-2", "PLO-3", "PLO-4", "PLO-5"],
	"PEO-2": ["PLO-6", "PLO-9"],
	"PEO-3": ["PLO-7", "PLO-8", "PLO-10", "PLO-11"],
};

export default function PeoPlo() {
	return (
		<main className="bg-slate-50 text-slate-700">
			<section className="relative overflow-hidden bg-[#071f47] text-white">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.08]"
					style={{
						backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
						backgroundSize: "24px 24px",
					}}
				/>
				<div className="relative mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-18 lg:px-10 lg:py-20">
					<Reveal className="max-w-4xl">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
							Department of Electrical Engineering
						</p>
						<h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Program objectives &amp; learning outcomes
						</h1>
						<p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
							The educational goals and graduate capabilities that shape the BE Electrical Engineering program at Sukkur IBA University.
						</p>
					</Reveal>
				</div>
			</section>

			<section id="peos" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
				<Reveal className="max-w-2xl">
					<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-[#071f47]">
						<BookOpenCheck size={25} strokeWidth={1.8} />
					</div>
					<p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Where the program leads</p>
					<h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Program Educational Objectives</h2>
					<p className="mt-4 text-base leading-8 text-slate-600">Our PEOs describe what graduates are expected to achieve in their professional lives after completing the program.</p>
				</Reveal>

				<div className="mt-10 grid gap-5 lg:grid-cols-3">
					{objectives.map(({ id, label, text, icon: Icon }, index) => (
						<Reveal key={id} delay={index * 0.08} className="group border-t-4 border-amber-400 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg sm:p-8">
							<div className="flex items-center justify-between">
								<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071f47] text-amber-300"><Icon size={22} strokeWidth={1.8} /></div>
								<span className="font-mono text-xs font-bold tracking-widest text-slate-400">{id}</span>
							</div>
							<h3 className="mt-7 font-serif text-2xl font-bold leading-tight text-[#071f47]">{label}</h3>
							<p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
						</Reveal>
					))}
				</div>
			</section>

			<section id="plos" className="border-y border-slate-200 bg-white">
				<div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
					<Reveal className="flex max-w-3xl items-start gap-5">
						<div className="hidden h-12 w-1 shrink-0 bg-[#0a2a5e] sm:block" />
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">What graduates can do</p>
							<h2 className="mt-3 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Program Learning Outcomes</h2>
							<p className="mt-4 text-base leading-8 text-slate-600">By graduation, students develop the knowledge, judgment, tools, and professional habits needed to solve complex engineering problems.</p>
						</div>
					</Reveal>

					<div className="mt-10 grid gap-4 lg:grid-cols-2">
						{outcomes.map(([id, title, text], index) => (
							<Reveal key={id} delay={(index % 2) * 0.08} className="flex gap-4 border border-slate-200 bg-slate-50 p-5 sm:p-6">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#071f47] font-mono text-xs font-bold text-amber-300">{id.replace("PLO-", "")}</div>
								<div>
									<h3 className="font-serif text-xl font-bold leading-tight text-[#071f47]">{title}</h3>
									<p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section id="mapping" className="bg-[#071f47] text-white">
				<div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
					<Reveal>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Curriculum alignment</p>
						<h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">PEO-PLO mapping</h2>
						<p className="mt-4 max-w-2xl text-base leading-8 text-blue-100/75">The mapping below shows how the program outcomes support the long-term educational objectives of our graduates.</p>
					</Reveal>

					<Reveal className="mt-10 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.04]">
						<table className="w-full min-w-[640px] border-collapse text-left text-sm">
							<thead>
								<tr className="border-b border-white/10 text-xs uppercase tracking-wider text-blue-100/65">
									<th className="px-5 py-5 font-semibold">Program Learning Outcome</th>
									{objectives.map(({ id }) => <th key={id} className="px-5 py-5 text-center font-semibold">{id}</th>)}
								</tr>
							</thead>
							<tbody>
								{outcomes.map(([id, title]) => (
									<tr key={id} className="border-b border-white/10 last:border-0">
										<td className="px-5 py-4"><span className="font-mono text-amber-300">{id}</span><span className="ml-3 text-blue-100/80">{title}</span></td>
										{objectives.map(({ id: objectiveId }) => <td key={objectiveId} className="px-5 py-4 text-center">{mapping[objectiveId].includes(id) && <Check size={18} className="mx-auto text-amber-300" strokeWidth={2.5} />}</td>)}
									</tr>
								))}
							</tbody>
						</table>
					</Reveal>

					<Reveal className="mt-8 flex items-center gap-3 text-sm text-blue-100/70">
						<ArrowRight size={17} className="text-amber-300" />
						<span>Each checkmark indicates a direct contribution to the corresponding educational objective.</span>
					</Reveal>
				</div>
			</section>
		</main>
	);
}
