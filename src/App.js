import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PricingRoute from "./routes/PricingRoute";
import FaqRoute from "./routes/FaqRoute";
import ContactRoute from "./routes/ContactRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingRoute />} />
        <Route path="/faq" element={<FaqRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes>
    </>
  );
}

export default App;
