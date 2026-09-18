import MESchemaPage from "../ME_Electrical/MESchemaPage.jsx";

const credits = "3";
const makeCourses = (titles) => titles.map((title, index) => [String(index + 1), "", title, credits]);

const coreGroups = [
	{
		title: "Core Courses - Robotics and Intelligent Systems",
		courses: makeCourses(["Non-Linear Control Systems", "Robot Mechanics & Control", "Machine Learning & Artificial Intelligence"]),
	},
	{
		title: "Core Courses - Electrical Power",
		courses: makeCourses(["Advanced Electrical Machines", "Advanced Power Conversion", "Advance Power Systems"]),
	},
	{
		title: "Core Courses - Communication Systems",
		courses: makeCourses(["Advanced Digital Communication", "Advanced Mobile and Wireless Communication", "Information and Coding Theory"]),
	},
	{
		title: "Core Courses - Signal Processing",
		courses: makeCourses(["Advanced Digital Signal Processing", "Advanced Digital Systems Design", "Bio-Medical Signal Processing"]),
	},
	{
		title: "Core Courses - Embedded Systems Design",
		courses: makeCourses(["Advanced Digital Systems Design", "Advanced VLSI Design", "Analog and Mixed System Design"]),
	},
	{
		title: "Core Courses - Nano Engineering",
		courses: makeCourses(["Modeling and Simulation of Nano Systems", "Nanofabrication", "Nano Scale Synthesis and Characterization"]),
	},
];

const electiveGroups = [
	{
		title: "Elective Courses - Robotics and Intelligent Systems",
		courses: makeCourses(["Sensor Technology/Advanced Sensors & Materials", "Advanced Digital Signal Processing", "Deep Learning & Big Data Analysis", "Bio-Medical Robotics", "Mobile Robotics & Autonomous Navigation", "Fuzzy Systems", "Human-Computer Interface", "Developmental Robotics", "Swarm Robotics & Bio-Inspired Robots", "IoT Based System Design", "Energy Storage & Energy Harvesting", "Computer Vision & Applications", "Intelligent Machine Design"]),
	},
	{
		title: "Elective Courses - Electrical Power",
		courses: makeCourses(["High Voltage DC Transmission", "Industrial Drives - Power Electronics", "Electric Vehicle Technology", "Electric Machine Design", "Photovoltaic Power System Design", "Wind Power System", "Distributed Generation & Micro grids", "Sustainable Energy System", "Electricity Market", "Steam and Gas Power Systems", "Smart Grids", "Power Economics & Management", "Electrical Power Quality", "Power System Stability"]),
	},
	{
		title: "Elective Courses - Communication Systems",
		courses: makeCourses(["mm-Wave Communication", "Microwave Systems Design", "Wireless Sensor Networks", "Advanced Optical Communication Systems", "Error Correcting Codes", "Multimedia Communication", "Advanced Communication Networks", "Radar Engineering", "Machine Learning Techniques", "Advanced Topics in Communication Systems"]),
	},
	{
		title: "Elective Courses - Signal Processing",
		courses: makeCourses(["Adaptive Filter Theory", "Bio-Medical Signal Processing", "Advanced Digital Image Processing", "Applied Signal Processing", "Computer Vision", "Pattern Recognition", "Statistical Signal Processing", "Estimation and Detection Theory", "Multirate Systems and Filter Banks", "Machine Learning Techniques"]),
	},
	{
		title: "Elective Courses - Embedded Systems Design",
		courses: makeCourses(["Digital Integrated Circuit Design", "Analog Integrated Circuit Design", "Advanced Digital Image Processing", "Electronic Packaging", "ASIC Design Methodology", "MEMS", "Semiconductor Material technology", "Non-Linear Control Systems", "System Validation", "Applied Signal Processing"]),
	},
	{
		title: "Elective Courses - Nano Engineering",
		courses: makeCourses(["Nano-Electronics", "Nano Devices For Energy Applications", "Nano Materials Characterization Instruments And Processing Techniques", "Nano-Photonics", "Smart Batteries", "Nano systems Integration", "Nano Medicine", "Nano Sensors and Systems", "Nano Electronics & Organic Electronics", "Special Topics in Nano Science & Engineering"]),
	},
];

const interdisciplinaryCourses = makeCourses([
	"Convex Optimization",
	"Advanced Linear Algebra",
	"Numerical Analysis",
	"Advanced Engineering Mathematics",
	"Probability and Stochastic Processes",
]);

const courseGroups = [
	...coreGroups,
	...electiveGroups,
	{ title: "Inter-Disciplinary Elective Courses", courses: interdisciplinaryCourses },
];

const allCourses = courseGroups.flatMap(({ courses }) => courses);

export default function Upto2024() {
	return (
		<MESchemaPage
			programme="PhD Electrical Engineering"
			batch="Up to Batch 2024"
			total="54 Credit Hours"
			courseGroups={[
				{
					title: "Course Distribution",
					items: [
						["Core Courses", "03 courses - 09 Credit Hours"],
						["Elective Courses", "03 courses - 09 Credit Hours"],
						["Interdisciplinary Electives", "02 courses - 06 Credit Hours"],
						["Thesis", "30 Credit Hours"],
						["Total", "54 Credit Hours"],
					],
				},
				...courseGroups,
			]}
			allCourses={allCourses}
		/>
	);
}
