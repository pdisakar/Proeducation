import Aboutus from "@/pages/Aboutus";
import Contactform from "@/pages/Contactform";
import Dreamdestination from "@/pages/Dreamdestination";
import Herosection from "@/pages/Herosection";
import Services from "@/pages/Services";
import Testimonials from "@/pages/Testimonials";
import Whychooseus from "@/pages/Whychooseus";

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
      <section className="testimonials-container">
        <Testimonials />
      </section>
      <section className="contact-form-container">
        <Contactform />
      </section>
      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.75073935352745!2d85.30428865256087!3d27.71692102673474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18c6be8cb691%3A0x666377d5fd9cf99d!2sLuxury%20Holidays%20Nepal%20%7C%20Luxury%20Trekking%20Nepal%20%7C%20Luxury%20Tour%20Nepal%20%7C%20Everest%20Base%20Camp%20Helicopter%20Tour%20%7C%20Bhutan%20Tour!5e0!3m2!1sne!2snp!4v1743745221392!5m2!1sne!2snp"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps location of ProEducation Consultancy, Nepal"
        ></iframe>
      </section>
    </main>
  );
}
