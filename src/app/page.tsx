import Dreamdestination from "@/pages/Dreamdestination";
import Herosection from "@/pages/Herosection";
import Services from "@/pages/Services";

export default function Home() {
  return (
    <main>
      <section className="hero-section-container">
        <Herosection />
      </section>
      <section className="dream-destination-container">
        <Dreamdestination />
      </section>
      <section className="services-container">
        <Services />
      </section>
    </main>
  );
}
