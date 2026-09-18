import MESchemaPage from "../ME_Electrical/MESchemaPage.jsx";

const credits = "3 (3+0)";
const core = [
  ["01", "EE-701", "Advanced Control Systems", credits],
  ["02", "EE-708", "Advanced Digital Signal Processing", credits],
  ["03", "EE-703", "Applied Machine Learning", credits],
  ["04", "EE-704", "Research Methodology", credits],
];
const electives = [
  ["05", "EE-736", "Advanced Digital Systems Design", credits],
  ["06", "EE-739", "Advanced Communication Networks", credits],
  ["07", "EE-740", "Advanced Integrated Circuits", credits],
  ["08", "EE-710", "Advanced Radio Frequency Circuit Design", credits],
];
const additional = [
  ["09", "EE-741", "Advanced Satellite Communication", credits],
  ["10", "EE-742", "Advanced Nano Technologies", credits],
];

const courseNames = [
  ["01", "EE-700", "ME Thesis", "6 (6+0)"],
  ["02", "EE-701", "Advanced Control System", credits],
  ["03", "EE-702", "Advanced Power Electronics", credits],
  ["04", "EE-703", "Applied Machine Learning", credits],
  ["05", "EE-704", "Research Methodology", credits],
  ["06", "EE-705", "Advanced Electrical Machines", credits],
  ["07", "EE-706", "Advanced Power Systems", credits],
  ["08", "EE-707", "Sustainable Energy Systems", credits],
  ["09", "EE-708", "Advanced Digital Signal Processing", credits],
  ["10", "EE-709", "Advanced VLSI Design", credits],
  ["11", "EE-710", "Advanced Radio Frequency Circuit Design", credits],
  ["12", "EE-711", "Advanced Networked Systems", credits],
  ["13", "EE-712", "Electricity Markets", credits],
  ["14", "EE-713", "Smart Grid Systems", credits],
  ["15", "EE-714", "Internet of Things Based Systems", credits],
  ["16", "EE-715", "Satellite Communication and Navigational Aids", credits],
  ["17", "EE-716", "Modeling and Simulation", credits],
  ["18", "EE-717", "High Voltage DC Transmission", credits],
  ["19", "EE-718", "Advanced Digital Communication", credits],
  ["20", "EE-719", "Electronic Materials and Devices", credits],
  ["21", "EE-720", "IC Design and Packaging Technologies", credits],
  ["22", "EE-721", "RF MEMS Theory and Application", credits],
  ["23", "EE-722", "Photovoltaic Power System Design", credits],
  ["24", "EE-723", "Advanced Mobile and Wireless Communication", credits],
  ["25", "EE-724", "Swarm Robotics and Bio Inspired Robotics", credits],
  ["26", "EE-725", "Advanced Digital Image Processing", credits],
  ["27", "EE-726", "Power System Analysis and Design", credits],
  ["28", "EE-727", "Distributed Generation and Smart Grids", credits],
  ["29", "EE-728", "Robust Control in Power Systems", credits],
  ["30", "EE-729", "Advance Power System Protection", credits],
  ["31", "EE-730", "Power Systems Stability and Control", credits],
  ["32", "EE-731", "Power Converter Design", credits],
  ["33", "EE-732", "Digital Control system and Design", credits],
  ["34", "EE-733", "Transmission and Distribution System Engineering", credits],
  ["35", "EE-734", "Advanced Computer Networks and Security", credits],
  ["36", "EE-735", "Advanced Power Conversion", credits],
  ["37", "EE-736", "Advanced Digital System Design", credits],
  ["38", "EE-737", "Advanced Topics in RF and Microwave", credits],
  ["39", "EE-738", "Distributed Generation and Microgrids", credits],
  ["40", "EE-739", "Advanced Communication Networks", credits],
  ["41", "EE-740", "Advanced Integrated Circuits", credits],
  ["42", "EE-741", "Advanced Satellite Communication", credits],
  ["43", "EE-742", "Advanced Nano Technologies", credits],
  ["44", "EE-743", "Computer Vision", credits],
  ["45", "EE-744", "Autonomous Vehicle Systems", credits],
  ["46", "EE-745", "Advanced Optical Communication Systems", credits],
  ["47", "EE-746", "Information and Coding theory", credits],
  ["48", "EE-747", "Wireless Sensor Networks", credits],
  ["49", "EE-748", "Signal Detection and Estimation", credits],
  ["50", "EE-749", "Radio Frequency Identification (RFID) Systems", credits],
  ["51", "EE-750", "Analysis of Algorithms", credits],
  ["52", "EE-751", "Optimization Techniques", credits],
  ["53", "EE-752", "Advanced Probability and Stochastic Processes", credits],
  ["54", "EE-753", "Professional Leadership Development", credits],
];

export default function Upto2025() {
  return (
    <MESchemaPage
      programme="M.E. Electronics and Communication"
      batch="Up to Batch 2025"
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