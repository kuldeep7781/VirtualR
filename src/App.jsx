import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SignIn from "./Pages/SignIn";
import CreateAccount from "./Pages/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeatureSection />
              <Workflow />
              <Pricing />
              <Testimonials />
            </>
          }
        />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
