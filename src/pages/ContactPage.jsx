import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import BusinessHours from "../components/Contact/BusinessHours";
import ContactMap from "../components/Contact/ContactMap";
import ContactCTA from "../components/Contact/ContactCTA";

function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0A0A0A] pt-24">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <BusinessHours />
        <ContactMap />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;