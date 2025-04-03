import Aboutus from '@/pages/Aboutus';
import Dreamdestination from '@/pages/Dreamdestination';
import Herosection from '@/pages/Herosection';
import Services from '@/pages/Services';
import Whychooseus from '@/pages/Whychooseus';

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
      <section className="about-us">
        <Aboutus />
      </section>
      <section className="why-choose-us">
        <Whychooseus />
      </section>
    </main>
  );
}
