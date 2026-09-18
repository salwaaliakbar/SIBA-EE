import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import ScrollToHash from "./components/shared/scrollToHash.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
