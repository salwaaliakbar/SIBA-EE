import Reveal from "../../shared/reveal.jsx";

const distribution = [
	["Core Courses", "03", "09 Credit Hours"],
	["Elective Courses", "03", "09 Credit Hours"],
	["Interdisciplinary Electives", "02", "06 Credit Hours"],
	["Thesis", "--", "30 Credit Hours"],
];

const coreGroups = [
	{
		title: "Core Courses (Robotics and Intelligent Systems)",
		courses: ["Non-Linear Control Systems", "Robot Mechanics & Control", "Machine Learning & Artificial Intelligence"],
	},
	{
		title: "Core Courses (Electrical Power)",
		courses: ["Advanced Electrical Machines", "Advanced Power Conversion", "Advance Power Systems"],
	},
	{
		title: "Core Courses (Communication Systems)",
		courses: ["Advanced Digital Communication", "Advanced Mobile and Wireless Communication", "Information and Coding Theory"],
	},
	{
		title: "Core Courses (Signal Processing)",
		courses: ["Advanced Digital Signal Processing", "Advanced Digital Systems Design", "Bio-Medical Signal Processing"],
	},
	{
		title: "Core Courses (Embedded Systems Design)",
		courses: ["Advanced Digital Systems Design", "Advanced VLSI Design", "Analog and Mixed System Design"],
	},
	{
		title: "Core Courses (Nano Engineering)",
		courses: ["Modeling and Simulation of Nano Systems", "Nanofabrication", "Nano Scale Synthesis and Characterization"],
	},
];

const electiveGroups = [
	{
		title: "Elective Courses (Robotics and Intelligent Systems)",
		courses: ["Sensor Technology/Advanced Sensors & Materials", "Advanced Digital Signal Processing", "Deep Learning & Big Data Analysis", "Bio-Medical Robotics", "Mobile Robotics & Autonomous Navigation", "Fuzzy Systems", "Human-Computer Interface", "Developmental Robotics", "Swarm Robotics & Bio-Inspired Robots", "IoT Based System Design", "Energy Storage & Energy Harvesting", "Computer Vision & Applications", "Intelligent Machine Design"],
	},
	{
		title: "Elective Courses (Electrical Power)",
		courses: ["High Voltage DC Transmission", "Industrial Drives - Power Electronics", "Electric Vehicle Technology", "Electric Machine Design", "Photovoltaic Power System Design", "Wind Power System", "Distributed Generation & Micro grids", "Sustainable Energy System", "Electricity Market", "Steam and Gas Power Systems", "Smart Grids", "Power Economics & Management", "Electrical Power Quality", "Power System Stability"],
	},
	{
		title: "Elective Courses (Communication Systems)",
		courses: ["mm-Wave Communication", "Microwave Systems Design", "Wireless Sensor Networks", "Advanced Optical Communication Systems", "Error Correcting Codes", "Multimedia Communication", "Advanced Communication Networks", "Radar Engineering", "Machine Learning Techniques", "Advanced Topics in Communication Systems"],
	},
	{
		title: "Elective Courses (Signal Processing)",
		courses: ["Adaptive Filter Theory", "Bio-Medical Signal Processing", "Advanced Digital Image Processing", "Applied Signal Processing", "Computer Vision", "Pattern Recognition", "Statistical Signal Processing", "Estimation and Detection Theory", "Multirate Systems and Filter Banks", "Machine Learning Techniques"],
	},
	{
		title: "Elective Courses (Embedded Systems Design)",
		courses: ["Digital Integrated Circuit Design", "Analog Integrated Circuit Design", "Advanced Digital Image Processing", "Electronic Packaging", "ASIC Design Methodology", "MEMS", "Semiconductor Material technology", "Non-Linear Control Systems", "System Validation", "Applied Signal Processing"],
	},
	{
		title: "Elective Courses (Nano Engineering)",
		courses: ["Nano-Electronics", "Nano Devices For Energy Applications", "Nano Materials Characterization Instruments And Processing Techniques", "Nano-Photonics", "Smart Batteries", "Nano systems Integration", "Nano Medicine", "Nano Sensors and Systems", "Nano Electronics & Organic Electronics", "Special Topics in Nano Science & Engineering"],
	},
];

const interdisciplinary = {
	title: "Inter-Disciplinary Elective Courses",
	courses: ["Convex Optimization", "Advanced Linear Algebra", "Numerical Analysis", "Advanced Engineering Mathematics", "Probability and Stochastic Processes"],
};

function CourseCard({ group, index }) {
	return (
		<Reveal delay={(index % 2) * 0.05} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
			<div className="border-b border-slate-200 bg-[#071f47] px-5 py-4 text-white">
				<h3 className="font-serif text-xl font-bold">{group.title}</h3>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full min-w-[420px] border-collapse text-left text-sm">
					<thead>
						<tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
							<th className="px-5 py-4 font-semibold">S. No.</th>
							<th className="px-5 py-4 font-semibold">Course</th>
							<th className="px-5 py-4 text-center font-semibold">Credit Hours</th>
						</tr>
					</thead>
					<tbody>
						{group.courses.map((course, i) => (
							<tr key={course} className="border-b border-slate-100 last:border-0">
								<td className="px-5 py-4 font-mono text-xs text-slate-500">{i + 1}.</td>
								<td className="px-5 py-4 font-medium text-slate-700">{course}</td>
								<td className="px-5 py-4 text-center font-mono text-xs text-slate-600">3</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
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

export default function Upto2024() {
	return (
		<main className="bg-slate-50 text-slate-700">
			<section className="relative overflow-hidden bg-[#071f47] text-white">
				<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
				<div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
					<Reveal className="max-w-4xl">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">PhD Electrical Engineering</p>
						<h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Course schema</h1>
						<p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">PhD Electrical Engineering, Up to Batch 2024.</p>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
				<SectionHeading eyebrow="Up to Batch 2024" title="Course Distribution" />
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
									<td className="px-5 py-4">54 Credit Hours</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</Reveal>
			</section>

			<section className="border-y border-slate-200 bg-white">
				<div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
					<SectionHeading eyebrow="Specializations" title="Core Courses" />
					<div className="mt-10 grid gap-8 lg:grid-cols-2">
						{coreGroups.map((group, index) => <CourseCard key={group.title} group={group} index={index} />)}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
				<SectionHeading eyebrow="Specializations" title="Elective Courses" />
				<div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
					{electiveGroups.map((group, index) => <CourseCard key={group.title} group={group} index={index} />)}
				</div>
			</section>

			<section className="border-t border-slate-200 bg-[#e9eff5]">
				<div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
					<SectionHeading eyebrow="Interdisciplinary" title="Inter-Disciplinary Elective Courses" />
					<div className="mt-10 max-w-3xl">
						<CourseCard group={interdisciplinary} index={0} />
					</div>
				</div>
			</section>
		</main>
	);
}
