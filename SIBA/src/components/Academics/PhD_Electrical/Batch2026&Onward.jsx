import MESchemaPage from "../ME_Electrical/MESchemaPage.jsx";
import { phdCourses } from "./PhDCourses.js";

const semesters = [
	{
		title: "First Semester",
		total: "10 (09+1)",
		courses: [
			["01", "", "Course-I", "3 (3+0)"],
			["02", "", "Course-II", "3 (3+0)"],
			["03", "", "Course-III", "3 (3+0)"],
			["04", "", "Tafheem Ul Quran-I", "1 (0+1)"],
		],
	},
	{
		title: "Second Semester",
		total: "10 (09+1)",
		note: "Comprehensive / Qualifying Examination: Paper-I Research Aptitude, Paper-II Rest of the Courses. Students can appear for proposal defense only after passing this examination.",
		courses: [
			["01", "", "Course-IV", "3 (3+0)"],
			["02", "", "Course-V", "3 (3+0)"],
			["03", "", "Course-VI", "3 (3+0)"],
			["04", "", "Tafheem Ul Quran-II", "1 (0+1)"],
		],
	},
	{
		title: "Third Semester",
		total: "03 (03+0)",
		courses: [["01", "", "Thesis-I", "3 (3+0)"]],
	},
	{
		title: "Fourth Semester",
		total: "09 (09+0)",
		courses: [["01", "", "Thesis-II", "9 (09+0)"]],
	},
	{
		title: "Fifth Semester",
		total: "09 (09+0)",
		courses: [["01", "", "Thesis-III", "9 (09+0)"]],
	},
	{
		title: "Sixth Semester",
		total: "09 (09+0)",
		courses: [["01", "", "Thesis-IV", "9 (09+0)"]],
	},
];

export default function Batch2026Onward() {
	return (
		<MESchemaPage
			programme="PhD Electrical Engineering"
			batch="Batch 2026 and onwards"
			total="50 (48+2) Credit Hours"
			courseGroups={[
				{
					title: "Programme credit structure",
					items: [
						["Courses", "06 courses, 18 Credit Hours"],
						["Thesis / Dissertations", "30 Credit Hours"],
						["Tafheem Ul Quran-I", "1 (0+1) Credit Hour"],
						["Tafheem Ul Quran-II", "1 (0+1) Credit Hour"],
						["Total", "50 Credit Hours"],
					],
				},
			]}
			semesters={semesters}
			allCourses={phdCourses}
		/>
	);
}
