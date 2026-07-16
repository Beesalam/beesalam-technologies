import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <main className="pt-24">
        <Hero />
      </main>
    </div>
  );
}

export default Home;