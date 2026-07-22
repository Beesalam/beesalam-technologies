import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Brands from "../components/Brands/Brands";
import Categories from "../components/Categories/Categories";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Services from "../components/Services/Services.jsx";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <main className="pt-24">
        <Hero />
         <Brands />
         <Categories />
         <WhyChooseUs />
          <Services />
          <Testimonials />
          <About />
          <CTA />
          <Footer />
      </main>
    </div>
  );
}

export default Home;