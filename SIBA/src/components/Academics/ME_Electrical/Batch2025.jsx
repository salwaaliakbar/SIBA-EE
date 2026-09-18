import MESchemaPage from "./MESchemaPage.jsx";

const credits = "3 (3+0)";
const core = [
  ["01", "EE-701", "Advanced Control Systems", credits],
  ["02", "EE-702", "Advanced Power Electronics", credits],
  ["03", "EE-703", "Applied Machine Learning", credits],
  ["04", "EE-704", "Research Methodology", credits],
];
const electives = [
  ["05", "EE-705", "Advanced Electrical Machines", credits],
  ["06", "EE-706", "Advanced Power Systems", credits],
  ["07", "EE-707", "Sustainable Energy Systems", credits],
  ["08", "EE-739", "Advanced Communication Networks", credits],
];
const additional = [
  ["09", "EE-712", "Electricity Markets", credits],
  ["10", "EE-713", "Smart Grid Systems", credits],
];

const courseNames = [
  ["01", "EE-701", "Advanced Control System"],
  ["02", "EE-702", "Advanced Power Electronics"],
  ["03", "EE-703", "Applied Machine Learning"],
  ["04", "EE-704", "Research Methodology"],
  ["05", "EE-705", "Advanced Electrical Machines"],
  ["06", "EE-706", "Advanced Power Systems"],
  ["07", "EE-707", "Sustainable Energy Systems"],
  ["08", "EE-708", "Advanced Digital Signal Processing"],
  ["09", "EE-709", "Advanced VLSI Systems Design"],
  ["10", "EE-710", "Advanced Radio Frequency Circuit Design"],
  ["11", "EE-711", "Advanced Networked Systems"],
  ["12", "EE-712", "Electricity Markets"],
  ["13", "EE-713", "Smart Grid Systems"],
  ["14", "EE-714", "Internet of Things Based Systems"],
  [
    "15",
    "EE-715",
    "Satellite Communication and Navigational Aids (replaced with EE-741)",
  ],
  ["16", "EE-716", "Modeling and Simulation"],
  ["17", "EE-717", "High Voltage DC Transmission"],
  ["18", "EE-718", "Advanced Digital Communication"],
  ["19", "EE-719", "Electronic Materials and Devices"],
  ["20", "EE-720", "IC Design and Packaging Technologies"],
  ["21", "EE-721", "RF MEMS Theory and Application"],
  ["22", "EE-722", "Photovoltaic Power System Design"],
  ["23", "EE-723", "Advanced Mobile and Wireless Communication"],
  ["24", "EE-724", "Swarm Robotics and Bio Inspired Robotics"],
  ["25", "EE-725", "Advanced Digital Image Processing"],
  ["26", "EE-726", "Power System Analysis and Design"],
  ["27", "EE-727", "Distributed Generation and Smart Grids"],
  ["28", "EE-728", "Robust Control in Power Systems"],
  ["29", "EE-729", "Advanced Power System Protection"],
  ["30", "EE-730", "Power Systems Stability and Control"],
  ["31", "EE-731", "Power Converter Design"],
  ["32", "EE-732", "Digital Control System and Design"],
  ["33", "EE-733", "Transmission and Distribution System Engineering"],
  ["34", "EE-734", "Advanced Computer Networks and Security"],
  ["35", "EE-735", "Advanced Power Conversion"],
  ["36", "EE-736", "Advanced Digital Systems Design"],
  ["37", "EE-737", "Advanced Topics in RF and Microwave"],
  ["38", "EE-738", "Distributed Generation and Microgrids"],
  ["39", "EE-739", "Advanced Communication Networks"],
  ["40", "EE-740", "Advanced Integrated Circuits"],
  ["41", "EE-741", "Advanced Satellite Communication"],
  ["42", "EE-742", "Advanced Nano Technologies"],
  ["43", "EE-743", "Computer Vision"],
  ["44", "EE-744", "Autonomous Vehicle Systems"],
  ["45", "EE-745", "Advanced Optical Communication Systems"],
  ["46", "EE-746", "Information and Coding Theory"],
  ["47", "EE-747", "Wireless Sensor Networks"],
  ["48", "EE-748", "Signal Detection and Estimation"],
  ["49", "EE-749", "Radio Frequency Identification (RFID) Systems"],
  ["50", "EE-750", "Analysis of Algorithms"],
  ["51", "EE-751", "Optimization Techniques"],
  ["52", "EE-752", "Advanced Probability and Stochastic Processes"],
  ["53", "EE-753", "Professional Leadership Development"],
].map(([number, code, title]) => [number, code, title, credits]);

export default function Batch2025() {
  return (
    <MESchemaPage
      batch="Batch 2025"
      total="30 Credit Hours"
      courseGroups={[
        { title: "Core Courses", courses: core },
        { title: "Elective Courses", courses: electives },
        { title: "Additional Elective Courses", courses: additional },
      ]}
      allCourses={courseNames}
    />
  );
}
