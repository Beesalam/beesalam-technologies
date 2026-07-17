import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Brands from "../components/Brands/Brands";
import Categories from "../components/Categories/Categories";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";


function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <main className="pt-24">
        <Hero />
         <Brands />
         <Categories />
         <WhyChooseUs />
      </main>
    </div>
  );
}

export default Home;