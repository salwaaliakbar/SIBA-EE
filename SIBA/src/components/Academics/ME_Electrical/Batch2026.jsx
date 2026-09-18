import MESchemaPage from "./MESchemaPage.jsx";

const three = "3 (3+0)";
const one = "1 (0+1)";
const core = [
  ["01", "EE-701", "Advanced Control Systems", three],
  ["02", "EE-702", "Advanced Power Electronics", three],
  ["03", "EE-703", "Applied Machine Learning", three],
  ["04", "EE-704", "Research Methodology", three],
  ["05", "", "Tafheem Ul Quran-I", one],
  ["06", "", "Tafheem Ul Quran-II", one],
];
const electives = [
  ["05", "EE-705", "Advanced Electrical Machines", three],
  ["06", "EE-706", "Advanced Power Systems", three],
  ["07", "EE-707", "Sustainable Energy Systems", three],
  ["08", "EE-739", "Advanced Communication Networks", three],
];
const additional = [
  ["09", "EE-712", "Electricity Markets", three],
  ["10", "EE-713", "Smart Grid Systems", three],
];
const semesters = [
  {
    title: "First Semester",
    total: "10 (09+1)",
    courses: [
      ["01", "Core-I", "Core-I", three],
      ["02", "Core-II", "Core-II", three],
      ["03", "Elective-I", "Elective-I", three],
      ["04", "", "Tafheem Ul Quran-I", one],
    ],
  },
  {
    title: "Second Semester",
    total: "10 (09+1)",
    courses: [
      ["01", "Core-III", "Core-III", three],
      ["02", "Elective-II", "Elective-II", three],
      ["03", "Elective-III", "Elective-III", three],
      ["04", "", "Tafheem Ul Quran-II", one],
    ],
  },
  {
    title: "Third Semester",
    total: "09 (09+0)",
    courses: [
      ["01", "Core-IV", "Core-IV", three],
      ["02", "Elective-IV", "Elective-IV", three],
      ["03", "", "Thesis-I / Elective-V", three],
    ],
  },
  {
    title: "Fourth Semester",
    total: "03 (03+0)",
    courses: [["10", "", "Thesis-II / Elective-VI", three]],
  },
];
const names = [
  ["01", "EE-700", "ME Thesis", "6 (6+0)"],
  ["02", "EE-701", "Advanced Control System", three],
  ["03", "EE-702", "Advanced Power Electronics", three],
  ["04", "EE-703", "Applied Machine Learning", three],
  ["05", "EE-704", "Research Methodology", three],
  ["06", "EE-705", "Advanced Electrical Machines", three],
  ["07", "EE-706", "Advanced Power Systems", three],
  ["08", "EE-707", "Sustainable Energy Systems", three],
  ["09", "EE-708", "Advanced Digital Signal Processing", three],
  ["10", "EE-709", "Advanced VLSI Design", three],
  ["11", "EE-710", "Advanced Radio Frequency Circuit Design", three],
  ["12", "EE-711", "Advanced Networked Systems", three],
  ["13", "EE-712", "Electricity Markets", three],
  ["14", "EE-713", "Smart Grid Systems", three],
  ["15", "EE-714", "Internet of Things Based Systems", three],
  ["16", "EE-715", "Satellite Communication and Navigational Aids", three],
  ["17", "EE-716", "Modeling and Simulation", three],
  ["18", "EE-717", "High Voltage DC Transmission", three],
  ["19", "EE-718", "Advanced Digital Communication", three],
  ["20", "EE-719", "Electronic Materials and Devices", three],
  ["21", "EE-720", "IC Design and Packaging Technologies", three],
  ["22", "EE-721", "RF MEMS Theory and Application", three],
  ["23", "EE-722", "Photovoltaic Power System Design", three],
  ["24", "EE-723", "Advanced Mobile and Wireless Communication", three],
  ["25", "EE-724", "Swarm Robotics and Bio Inspired Robotics", three],
  ["26", "EE-725", "Advanced Digital Image Processing", three],
  ["27", "EE-726", "Power System Analysis and Design", three],
  ["28", "EE-727", "Distributed Generation and Smart Grids", three],
  ["29", "EE-728", "Robust Control in Power Systems", three],
  ["30", "EE-729", "Advance Power System Protection", three],
  ["31", "EE-730", "Power Systems Stability and Control", three],
  ["32", "EE-731", "Power Converter Design", three],
  ["33", "EE-732", "Digital Control System and Design", three],
  ["34", "EE-733", "Transmission and Distribution System Engineering", three],
  ["35", "EE-734", "Advanced Computer Networks and Security", three],
  ["36", "EE-735", "Advanced Power Conversion", three],
  ["37", "EE-736", "Advanced Digital System Design", three],
  ["38", "EE-737", "Advanced Topics in RF and Microwave", three],
  ["39", "EE-738", "Distributed Generation and Microgrids", three],
  ["40", "EE-739", "Advanced Communication Networks", three],
  ["41", "EE-740", "Advanced Integrated Circuits", three],
  ["42", "EE-741", "Advanced Satellite Communication", three],
  ["43", "EE-742", "Advanced Nano Technologies", three],
  ["44", "EE-743", "Computer Vision", three],
  ["45", "EE-744", "Autonomous Vehicle Systems", three],
  ["46", "EE-745", "Advanced Optical Communication Systems", three],
  ["47", "EE-746", "Information and Coding Theory", three],
  ["48", "EE-747", "Wireless Sensor Networks", three],
  ["49", "EE-748", "Signal Detection and Estimation", three],
  ["50", "EE-749", "Radio Frequency Identification (RFID) Systems", three],
  ["51", "EE-750", "Analysis of Algorithms", three],
  ["52", "EE-751", "Optimization Techniques", three],
  ["53", "EE-752", "Advanced Probability and Stochastic Processes", three],
  ["54", "EE-753", "Professional Leadership Development", three],
];

export default function Batch2026() {
  const distribution = [
    {
      title: "With thesis",
      items: [
        ["Core courses", "04 courses / 12 CH"],
        ["Elective courses", "04 courses / 12 CH"],
        ["Tafheem Ul Quran-I", "01 course / 01 CH (0+1)"],
        ["Tafheem Ul Quran-II", "01 course / 01 CH (0+1)"],
        ["Thesis", "06 CH"],
        ["Total", "32 CH"],
      ],
    },
    {
      title: "Without thesis",
      items: [
        ["Core courses", "04 courses / 12 CH"],
        ["Elective courses", "04 courses / 12 CH"],
        ["Tafheem Ul Quran-I", "01 course / 01 CH (0+1)"],
        ["Tafheem Ul Quran-II", "01 course / 01 CH (0+1)"],
        ["Additional electives", "02 courses / 06 CH"],
        ["Total", "32 CH"],
      ],
    },
  ];

  return (
    <MESchemaPage
      batch="Batch 2026 and onwards"
      total="32 Credit Hours"
      courseGroups={[
        ...distribution,
        { title: "Core Courses", courses: core },
        { title: "Elective Courses", courses: electives },
        { title: "Additional Elective Courses", courses: additional },
      ]}
      semesters={semesters}
      allCourses={names}
    />
  );
}
