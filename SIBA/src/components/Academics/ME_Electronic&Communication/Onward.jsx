import MESchemaPage from "../ME_Electrical/MESchemaPage.jsx";

const threeCredits = "3 (3+0)";
const oneCredit = "1 (0+1)";
const core = [
  ["01", "EE-701", "Advanced Control Systems", threeCredits],
  ["02", "EE-708", "Advanced Digital Signal Processing", threeCredits],
  ["03", "EE-703", "Applied Machine Learning", threeCredits],
  ["04", "EE-704", "Research Methodology", threeCredits],
  ["05", "", "Tafheem Ul Quran-I", oneCredit],
  ["06", "", "Tafheem Ul Quran-II", oneCredit],
];
const electives = [
  ["07", "EE-736", "Advanced Digital Systems Design", threeCredits],
  ["08", "EE-739", "Advanced Communication Networks", threeCredits],
  ["09", "EE-540", "Advanced Integrated Circuits", threeCredits],
  ["10", "EE-710", "Advanced Radio Frequency Circuit Design", threeCredits],
];
const additional = [
  ["11", "EE-741", "Advanced Satellite Communication", threeCredits],
  ["12", "EE-742", "Advanced Nano Technologies", threeCredits],
];

const semesters = [
  {
    title: "First Semester",
    total: "10 (09+1)",
    courses: [
      ["01", "", "Core-I", threeCredits],
      ["02", "", "Core-II", threeCredits],
      ["03", "", "Elective-I", threeCredits],
      ["04", "", "Tafheem Ul Quran-I", oneCredit],
    ],
  },
  {
    title: "Second Semester",
    total: "10 (09+1)",
    courses: [
      ["04", "", "Core-III", threeCredits],
      ["05", "", "Elective-II", threeCredits],
      ["06", "", "Elective-III", threeCredits],
      ["07", "", "Tafheem Ul Quran-II", oneCredit],
    ],
  },
  {
    title: "Third Semester",
    total: "09 (09+0)",
    courses: [
      ["07", "", "Core-IV", threeCredits],
      ["08", "", "Elective-IV", threeCredits],
      ["09", "", "Thesis-I / Elective-V", threeCredits],
    ],
  },
  {
    title: "Fourth Semester",
    total: "03 (03+0)",
    courses: [["10", "", "Thesis-II / Elective-VI", threeCredits]],
  },
];

const allCourses = [
  ["01", "EE-700", "ME Thesis", "6 (6+0)"],
  ["02", "EE-701", "Advanced Control System", threeCredits],
  ["03", "EE-702", "Advanced Power Electronics", threeCredits],
  ["04", "EE-703", "Applied Machine Learning", threeCredits],
  ["05", "EE-704", "Research Methodology", threeCredits],
  ["06", "EE-705", "Advanced Electrical Machines", threeCredits],
  ["07", "EE-706", "Advanced Power Systems", threeCredits],
  ["08", "EE-707", "Sustainable Energy Systems", threeCredits],
  ["09", "EE-708", "Advanced Digital Signal Processing", threeCredits],
  ["10", "EE-709", "Advanced VLSI Design", threeCredits],
  ["11", "EE-710", "Advanced Radio Frequency Circuit Design", threeCredits],
  ["12", "EE-711", "Advanced Networked Systems", threeCredits],
  ["13", "EE-712", "Electricity Markets", threeCredits],
  ["14", "EE-713", "Smart Grid Systems", threeCredits],
  ["15", "EE-714", "Internet of Things Based Systems", threeCredits],
  ["16", "EE-715", "Satellite Communication and Navigational Aids", threeCredits],
  ["17", "EE-716", "Modeling and Simulation", threeCredits],
  ["18", "EE-717", "High Voltage DC Transmission", threeCredits],
  ["19", "EE-718", "Advanced Digital Communication", threeCredits],
  ["20", "EE-719", "Electronic Materials and devices", threeCredits],
  ["21", "EE-720", "IC Design and Packaging Technologies", threeCredits],
  ["22", "EE-721", "RF MEMS Theory and Application", threeCredits],
  ["23", "EE-722", "Photovoltaic Power system Design", threeCredits],
  ["24", "EE-723", "Advanced Mobile and Wireless Communication", threeCredits],
  ["25", "EE-724", "Swarm Robotics and Bio Inspired Robotics", threeCredits],
  ["26", "EE-725", "Advanced Digital Image Processing", threeCredits],
  ["27", "EE-726", "Power System Analysis and Design", threeCredits],
  ["28", "EE-727", "Distributed Generation and Smart Grids", threeCredits],
  ["29", "EE-728", "Robust Control in Power Systems", threeCredits],
  ["30", "EE-729", "Advance Power System Protection", threeCredits],
  ["31", "EE-730", "Power Systems Stability and Control", threeCredits],
  ["32", "EE-731", "Power Converter Design", threeCredits],
  ["33", "EE-732", "Digital Control system and Design", threeCredits],
  ["34", "EE-733", "Transmission and Distribution System Engineering", threeCredits],
  ["35", "EE-734", "Advanced Computer Networks and Security", threeCredits],
  ["36", "EE-735", "Advanced Power Conversion", threeCredits],
  ["37", "EE-736", "Advanced Digital System Design", threeCredits],
  ["38", "EE-737", "Advanced Topics in RF and Microwave", threeCredits],
  ["39", "EE-738", "Distributed Generation and Microgrids", threeCredits],
  ["40", "EE-739", "Advanced Communication Networks", threeCredits],
  ["41", "EE-740", "Advanced Integrated Circuits", threeCredits],
  ["42", "EE-741", "Advanced Satellite Communication", threeCredits],
  ["43", "EE-742", "Advanced Nano Technologies", threeCredits],
  ["44", "EE-743", "Computer Vision", threeCredits],
  ["45", "EE-744", "Autonomous Vehicle Systems", threeCredits],
  ["46", "EE-745", "Advanced Optical Communication Systems", threeCredits],
  ["47", "EE-746", "Information and Coding theory", threeCredits],
  ["48", "EE-747", "Wireless Sensor Networks", threeCredits],
  ["49", "EE-748", "Signal Detection and Estimation", threeCredits],
  ["50", "EE-749", "Radio Frequency Identification (RFID) Systems", threeCredits],
  ["51", "EE-750", "Analysis of Algorithms", threeCredits],
  ["52", "EE-751", "Optimization Techniques", threeCredits],
  ["53", "EE-752", "Advanced Probability and Stochastic Processes", threeCredits],
  ["54", "EE-753", "Professional Leadership Development", threeCredits],
];

export default function Onward() {
  return (
    <MESchemaPage
      programme="M.E. Electronics and Communication"
      batch="From Batch 2025 and onwards"
      total="32 Credit Hours"
      courseGroups={[
        {
          title: "With thesis",
          items: [
            ["Core Courses", "04 courses / 12 Credit Hours"],
            ["Elective Courses", "04 courses / 12 Credit Hours"],
            ["Tafheem Ul Quran-I", "01 credit hour (0+1)"],
            ["Tafheem Ul Quran-II", "01 credit hour (0+1)"],
            ["Thesis", "06 Credit Hours"],
            ["Total", "32 Credit Hours"],
          ],
        },
        {
          title: "Without thesis",
          items: [
            ["Core Courses", "04 courses / 12 Credit Hours"],
            ["Elective Courses", "04 courses / 12 Credit Hours"],
            ["Tafheem Ul Quran-I", "01 credit hour (0+1)"],
            ["Tafheem Ul Quran-II", "01 credit hour (0+1)"],
            ["Additional Elective Courses", "02 courses / 06 Credit Hours"],
            ["Total", "32 Credit Hours"],
          ],
        },
        { title: "Core Courses", courses: core },
        { title: "Elective Courses", courses: electives },
        { title: "Additional Elective Courses", courses: additional },
      ]}
      semesters={semesters}
      allCourses={allCourses}
    />
  );
}