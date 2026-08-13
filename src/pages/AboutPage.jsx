import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import About from "../components/About/About";
import CoreValues from "../components/About/CoreValues";
import WhyTrustUs from "../components/About/WhyTrustUs";
import AboutCTA from "../components/About/AboutCTA";

function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0A0A0A] pt-24">
        <About />
        <CoreValues />
        <WhyTrustUs />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;