import MESchemaPage from "../ME_Electrical/MESchemaPage.jsx";
import { phdCourses } from "./PhDCourses.js";

export default function Batch2025() {
	return (
		<MESchemaPage
			programme="PhD Electrical Engineering"
			batch="Batch 2025"
			total="159 Credit Hours"
			courseGroups={[{ title: "Course List", courses: phdCourses }]}
			allCourses={phdCourses}
		/>
	);
}
