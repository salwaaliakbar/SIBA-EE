import ugPhase1Poster from "../assets/admissions/ug-2025-phase-1.jpg";
import ugPhase2Poster from "../assets/admissions/ug-2025-phase-2.jpg";
import sthpPoster from "../assets/admissions/sthp-2025.jpg";
import nthpPoster from "../assets/admissions/nthp-2024.jpg";
import foundationPoster from "../assets/admissions/foundation-2025.jpg";
import mePoster from "../assets/admissions/me-spring-2025.jpg";
import phdPoster from "../assets/admissions/phd-2026.jpg";

const DOCS_BASE = "https://apps.iba-suk.edu.pk/dashboard-admission-sts-hr/down/admission_documents";

export const admissionLinks = {
  applyOnline: "https://applyadmission.iba-suk.edu.pk/application/index.php",
  procedure: "https://www.iba-suk.edu.pk/Content/pdf/admissions/Admission%20Proceedures.pdf",
  policy: "https://ee.iba-suk.edu.pk/downloads/SIBAU_Admispolicy-July%2014%20%202023.pdf",
  feeStructure: "https://www.iba-suk.edu.pk/Content/pdf/admissions/Fee%20Structure%20Main%20Campus%202025-26.pdf",
  announcements: "https://www.iba-suk.edu.pk/admissions/announcements",
  nthp: "http://nthp.iba-suk.edu.pk",
};

export const admissionsOffice = {
  phones: ["071-5644276", "071-5644218", "071-5644219"],
  email: "admission@iba-suk.edu.pk",
};

// The admission year is laid out April → March so no window wraps across the year boundary.
export const cycleMonths = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

// apply / test / classes are inclusive index ranges into cycleMonths, drawn from the 2025 and 2026 cycles.
export const pathways = [
  {
    id: "direct-test-phase-1",
    name: "Direct Aptitude Test — Phase I",
    level: "Undergraduate",
    route: "Direct entry",
    programs: "BE Electrical Engineering (Power · Electronics · Telecommunication)",
    window: "Announced April–May · test in May–June",
    apply: [0, 1],
    test: [1, 2],
    classes: [4, 4],
    highlights: [
      "Main intake for BE Electrical Engineering — admission is offered directly on test merit.",
      "Test pattern: English, Mathematics and IQ sections.",
      "Open to students who passed intermediate in the last two years or are appearing in HSC Part-II.",
      "Admission test processing fee Rs. 2,500.",
    ],
    cycles: [
      { label: "2025", lastDate: "2025-06-05", test: "June 15, 2025", classes: "August 2025" },
      { label: "2026", lastDate: "2026-05-05", test: "May 17, 2026", classes: "August 2026" },
    ],
  },
  {
    id: "direct-test-phase-2",
    name: "Direct Aptitude Test — Phase II",
    level: "Undergraduate",
    route: "Direct entry",
    programs: "BE Electrical Engineering (against vacant seats)",
    window: "Announced mid-June · test in July",
    apply: [2, 2],
    test: [3, 3],
    classes: [4, 4],
    highlights: [
      "Second round of the direct test for seats that remain after Phase I.",
      "Same test pattern and eligibility as Phase I; you can apply to more than one program.",
      "Classes begin with the Phase I batch in August.",
    ],
    cycles: [
      { label: "2025", lastDate: "2025-07-03", test: "July 13, 2025", classes: "August 2025" },
      { label: "2026", lastDate: "2026-06-29", test: "July 05, 2026", classes: "August 2026" },
    ],
  },
  {
    id: "foundation-semester",
    name: "Foundation Semester (Regular)",
    level: "Undergraduate",
    route: "Foundation route",
    programs: "BE Electrical Engineering via a six-month foundation semester",
    window: "Announced October–December · test in November–January",
    apply: [6, 8],
    test: [7, 9],
    classes: [8, 10],
    highlights: [
      "Six-month semester in English, Mathematics and ICT after qualifying the foundation test.",
      "A GPA of 2.2 or above makes you eligible for undergraduate programs; top performers are offered BE admission for Fall.",
      "Foundation fee Rs. 55,000 with free books and university bus within Sukkur/Rohri.",
      "Intermediate must be completed within the last three years. No hostel during the foundation semester.",
    ],
    cycles: [
      { label: "2025", lastDate: "2025-01-09", test: "January 18, 2025", classes: "February 2025" },
      { label: "2025–26", lastDate: "2025-11-20", test: "November 30, 2025", classes: "December 2025" },
    ],
  },
  {
    id: "nthp",
    name: "OGDC National Talent Hunt Program (NTHP)",
    level: "Undergraduate",
    route: "Scholarship · Foundation route",
    programs: "Fully funded BE Electrical Engineering for students from underprivileged districts",
    window: "Announcement month varies (September to January) · test 2–4 weeks after last date",
    apply: [5, 10],
    test: [7, 10],
    classes: [9, 11],
    highlights: [
      "Fully funded by OGDC for youth from OGDC-identified districts across Pakistan; merit-cum-poverty selection.",
      "340 students join the foundation semester; the top 200 (min 2.2 GPA) keep the scholarship for the full degree.",
      "Covers tuition, transport, books, hostel and a monthly stipend; laptops for outstanding performers.",
      "District list and test centres are published at nthp.iba-suk.edu.pk.",
    ],
    cycles: [
      { label: "NTHP 2024", lastDate: "2024-11-04", test: "November 17, 2024", classes: "January 2025" },
      { label: "NTHP 2026", lastDate: "2026-02-07", test: "February 15, 2026", classes: "March 2026" },
    ],
    link: { label: "NTHP portal", url: admissionLinks.nthp },
  },
  {
    id: "sthp",
    name: "Sindh Talent Hunt Program (STHP)",
    level: "Undergraduate",
    route: "Scholarship · Foundation route",
    programs: "Scholarship-based BE Electrical Engineering for students of Sindh",
    window: "Announced November–December · test in December–January",
    apply: [7, 9],
    test: [8, 9],
    classes: [9, 10],
    highlights: [
      "Run with the Government of Sindh for students with a Sindh domicile; merit-cum-need selection.",
      "Top 200 join a free foundation semester with Rs. 5,000 living cost and Rs. 4,000 stipend per month.",
      "Top 100 (min 2.2 GPA) receive a 100% tuition waiver for 8 semesters plus Rs. 5,000 monthly stipend.",
      "Test centres: Sukkur, Hyderabad, Karachi, Mirpurkhas, Larkana and Naushahro Feroze.",
    ],
    cycles: [
      { label: "STHP 2025", lastDate: "2024-12-06", test: "December 15, 2024", classes: "January 2025" },
      { label: "STHP 2026", lastDate: "2026-01-09", test: "January 18, 2026", classes: "February 2026" },
    ],
  },
  {
    id: "me",
    name: "ME Electrical / Electronics & Communication",
    level: "Postgraduate",
    route: "Graduate",
    programs: "ME Electrical Engineering · ME Electronics and Communication (Spring intake)",
    window: "Announced early November · SIBAU graduate test in mid-December",
    apply: [7, 8],
    test: [8, 8],
    classes: [9, 9],
    highlights: [
      "16 years of education in a relevant field with minimum 60% marks or 2.2 CGPA.",
      "NTS GAT-General or HEC ETS-General (50%), GRE-General, or SIBAU-GAT (General).",
      "Shortlisted applicants are called for an interview after the test.",
      "Admission processing fee Rs. 2,500.",
    ],
    cycles: [
      { label: "Spring 2025", lastDate: "2024-12-06", test: "December 15, 2024", classes: "January 2025" },
      { label: "Spring 2026", lastDate: "2025-12-08", test: "December 13, 2025", classes: "January 2026" },
    ],
  },
  {
    id: "phd",
    name: "PhD Electrical Engineering",
    level: "Postgraduate",
    route: "Graduate",
    programs: "PhD Electrical Engineering",
    window: "Announced August–September · SIBAU-GAT in September–October",
    apply: [4, 5],
    test: [5, 6],
    classes: [9, 9],
    highlights: [
      "18 years of education with a research thesis in a relevant field, minimum 70% marks or 3.0 CGPA.",
      "NTS GAT-Subjective or HEC ETS-Subjective (60%), GRE-Subjective, or SIBAU-GAT (Subjective).",
      "Discipline-specific sample paper is published with the advertisement.",
      "Rs. 25,000 monthly stipend for PhD students (PhD 2026 advertisement).",
    ],
    cycles: [
      { label: "PhD 2026", lastDate: "2025-09-15", test: "September 20, 2025", classes: "January 2026" },
      { label: "PhD 2027", lastDate: "2026-10-20", test: "October 31, 2026", classes: "To be announced" },
    ],
  },
];

// Pathway cards and the timeline are grouped by degree, in this order.
export const pathwayGroups = [
  { title: "Bachelor's", subtitle: "BE Electrical Engineering", ids: ["direct-test-phase-1", "direct-test-phase-2", "foundation-semester", "nthp", "sthp"] },
  { title: "Master's", subtitle: "ME Electrical · ME Electronics & Communication", ids: ["me"] },
  { title: "PhD", subtitle: "PhD Electrical Engineering", ids: ["phd"] },
];

export const eligibility = [
  {
    program: "BE Electrical Engineering",
    points: [
      "HSSC (Pre-Engineering or ICS group) or 3-year DAE in a relevant field with at least 60% marks in the annual examination, with no supplementary.",
      "Or A-Levels with at least three C grades in three principal Pre-Engineering subjects, and no grade below C.",
      "Qualify the Sukkur IBA aptitude test (direct test), or complete the foundation semester with a GPA of 2.2 or above.",
    ],
  },
  {
    program: "ME Electrical Engineering / ME Electronics & Communication",
    points: [
      "Undergraduate degree (16 years of education) in a relevant field from an HEC-recognized institution, with at least 60% marks or 2.2 CGPA.",
      "NTS GAT-General or HEC ETS-General with at least 50%, International GRE-General, or qualify SIBAU-GAT (General).",
    ],
  },
  {
    program: "PhD Electrical Engineering",
    points: [
      "18 years of education with a research thesis in a relevant field, with at least 70% marks or 3.0 CGPA.",
      "NTS GAT-Subjective or HEC ETS-Subjective with at least 60%, International GRE-Subjective, or qualify SIBAU-GAT (Subjective).",
    ],
  },
];

export const selectionSteps = [
  { title: "Apply online", text: "Submit the online form and pay the Rs. 2,500 admission test processing fee before the last date." },
  { title: "Eligibility lists", text: "Lists of eligible and ineligible applicants are published on the admissions announcements page." },
  { title: "Aptitude test", text: "Undergraduate test: English (40), Mathematics (40) and IQ (20) questions. A sample paper is released with each advertisement." },
  { title: "Merit & interview", text: "The answer key and merit lists follow the test. Graduate applicants, and some undergraduate rounds, are interviewed." },
  { title: "Documents & fee", text: "Selected candidates verify original documents and pay fees within the deadline to confirm admission." },
];

export const requiredDocuments = {
  undergraduate: [
    "SSC / O-Level (or equivalent) certificate and mark sheet",
    "HSC / A-Level (or equivalent) certificate and mark sheet",
    "Equivalence certificate for foreign boards",
    "Migration certificate (for other boards)",
    "Six recent passport-size photographs",
    "Copy of CNIC / B-Form",
  ],
  graduate: [
    "Graduation degree or attested mark sheet",
    "SSC and HSC certificates with mark sheets",
    "Equivalence certificate for foreign degrees",
    "Migration certificate",
    "Six recent passport-size photographs",
    "Copy of CNIC",
  ],
};

export const posters = [
  { title: "Undergraduate Admissions 2025 — Phase I", caption: "Direct aptitude test · Main Campus", image: ugPhase1Poster, pdf: `${DOCS_BASE}/20250510072614922.pdf` },
  { title: "Undergraduate Admissions 2025 — Phase II", caption: "Direct aptitude test · Main Campus", image: ugPhase2Poster, pdf: `${DOCS_BASE}/20250616062349406.pdf` },
  { title: "Foundation Semester 2025", caption: "Regular foundation route", image: foundationPoster, pdf: `${DOCS_BASE}/20241214094313278.pdf` },
  { title: "OGDCL National Talent Hunt Program", caption: "NTHP · classes from January 2025", image: nthpPoster, pdf: `${DOCS_BASE}/20240906134208179.pdf` },
  { title: "Sindh Talent Hunt Program 2025", caption: "STHP foundation semester", image: sthpPoster, pdf: `${DOCS_BASE}/20241110084535731.pdf` },
  { title: "Graduate Programs — Spring 2025", caption: "ME Electrical · ME Electronics & Communication", image: mePoster, pdf: `${DOCS_BASE}/20241104052342331.pdf` },
  { title: "PhD Programme 2026", caption: "Announced August 2025", image: phdPoster, pdf: `${DOCS_BASE}/20250811110929229.pdf` },
];
