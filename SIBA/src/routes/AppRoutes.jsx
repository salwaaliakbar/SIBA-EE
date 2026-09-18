import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import VisionMission from "../components/About/Vision&Mission.jsx";
import AboutDepartment from "../components/About/AboutDep.jsx";
import PeoPlo from "../components/About/PeoPlo.jsx";
import ChairmanMessage from "../components/About/ChairmanMessage.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import BESchema from "../components/Academics/BESchema.jsx";
import LabInfrastructure from "../components/Academics/LabInfrastructure.jsx";
import MEElectricalBatch2024 from "../components/Academics/ME_Electrical/Batch2024.jsx";
import MEElectricalBatch2025 from "../components/Academics/ME_Electrical/Batch2025.jsx";
import MEElectricalBatch2026 from "../components/Academics/ME_Electrical/Batch2026.jsx";
import MEElectronicCommunicationUpto2025 from "../components/Academics/ME_Electronic&Communication/Upto2025.jsx";
import MEElectronicCommunicationOnward from "../components/Academics/ME_Electronic&Communication/Onward.jsx";
import PhDElectricalBatch2025 from "../components/Academics/PhD_Electrical/Batch2025.jsx";
import PhDElectricalBatch2026Onward from "../components/Academics/PhD_Electrical/Batch2026&Onward.jsx";
import PhDElectricalUpto2024 from "../components/Academics/PhD_Electrical/Upto2024.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/vision-mission" element={<VisionMission />} />
      <Route path="/about/about-department" element={<AboutDepartment />} />
      <Route path="/about/peos-plos" element={<PeoPlo />} />
      <Route path="/about/chairman-message" element={<ChairmanMessage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/academics/undergraduate/be-electrical-engineering" element={<BESchema />} />
      <Route path="/academics/undergraduate/be-electrical-engineering/course-schema" element={<BESchema />} />
      <Route path="/academics/lab-infrastructure" element={<LabInfrastructure />} />
      <Route path="/academics/postgraduate/me-electrical-engineering/batch-2024" element={<MEElectricalBatch2024 />} />
      <Route path="/academics/postgraduate/me-electrical-engineering/batch-2025" element={<MEElectricalBatch2025 />} />
      <Route path="/academics/postgraduate/me-electrical-engineering/batch-2026" element={<MEElectricalBatch2026 />} />
      <Route path="/academics/postgraduate/me-electronic-communication/upto-2025" element={<MEElectronicCommunicationUpto2025 />} />
      <Route path="/academics/postgraduate/me-electronic-communication/from-2025" element={<MEElectronicCommunicationOnward />} />
      <Route path="/academics/postgraduate/phd-electrical-engineering/batch-2025" element={<PhDElectricalBatch2025 />} />
      <Route path="/academics/postgraduate/phd-electrical-engineering/batch-2026-and-onwards" element={<PhDElectricalBatch2026Onward />} />
      <Route path="/academics/postgraduate/phd-electrical-engineering/upto-2024" element={<PhDElectricalUpto2024 />} />
    </Routes>
  );
}
