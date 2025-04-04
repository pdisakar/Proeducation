import React from "react";
import Image from "next/image";
import Link from "next/link";

const imageData = [
  { id: 0, path: "/hero-section/hero1.webp", alt: "Kantipur Apartment" },
  { id: 1, path: "/hero-section/hero2.webp", alt: "Kantipur Apartment" },
  { id: 2, path: "/hero-section/hero3.webp", alt: "Kantipur Apartment" },
];

const Herosection = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <div className="main-container">
        <div className="title">
          <span>Welcome to Proeducation Consultant</span>
          <h2>Embark on Your Journey to Global Academic Success</h2>
          <p>
            Nepal’s top platform offering independent application process tools
            for students aspiring to study in the USA and Canada, providing
            personalized and empowering experiences.
          </p>
        </div>

        <div className="flex flex-wrap mt-6 gap-6">
          <Link
            href="#"
            className="px-10 py-3 bg-primary text-white rounded-md inline-block"
          >
            Explore More
          </Link>

          <Link
            href="#"
            className="px-10 py-3 bg-primary/10 text-primary border border-primary rounded-md inline-block"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* {imageData.map(({ id, path, alt }, index) => (
         
          <Image
            key={id}
            height={254}
            width={588}
            src={path}
            alt={alt}
            className={`w-full h-full object-cover rounded-lg ${
              index === 0 ? "col-span-2" : ""
            }`}
          />
        ))} */}
        {imageData.map(({ id, path, alt }, index) => (
          <figure
            key={id}
            className={`image-slot before:pt-[43.19727891156463%] w-full h-full object-cover rounded-lg ${
              index === 0 ? "col-span-2" : ""
            }`}
          >
            <Image height={254} width={588} src={path} alt={alt} />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Herosection;
