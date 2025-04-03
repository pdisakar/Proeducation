import React from 'react';
import Image from 'next/image';

const imageData = [
  { id: 0, path: '/about-us/aboutus1.webp', alt: 'Kantipur Apartment' },
  { id: 1, path: '/about-us/aboutus2.webp', alt: 'Kantipur Apartment' },
  { id: 2, path: '/about-us/aboutus3.webp', alt: 'Kantipur Apartment' },
];

const achievement = [
  {
    id: 0,
    title: '15+',
    body: 'Years Experience',
  },
  {
    id: 1,
    title: '6000+',
    body: 'Visa Approved',
  },
  {
    id: 2,
    title: '96%',
    body: 'Admission Rate',
  },
];

const Aboutus = () => {
  return (
    <div className="common-box !pt-0">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="grid md:grid-cols-2 gap-6 order-2 lg:order-1">
          {imageData.map(({ id, path, alt }, index) => (
            <Image
              key={id}
              height={254}
              width={588}
              src={path}
              alt={alt}
              className={`w-full h-full object-cover rounded-lg ${
                index === 2 ? 'col-span-2' : ''
              }`}
            />
          ))}
        </div>
        <div className="about-us order-1 lg:order-2">
          <div className="title">
            <h2>About Us</h2>
            <p>
              At ProEducation Consultancy, we are committed to guiding students
              on their journey to studying abroad. With years of expertise in
              international education, we provide personalized support to help
              students navigate the complex application process with confidence.
              Our services include university selection, application strategy,
              personal statement and resume enhancement, recommendation letter
              guidance, visa assistance, and interview preparation. We work
              closely with each student to ensure they have the best chance of
              securing admission to top institutions worldwide. At ProEducation
              Consultancy, we believe that studying abroad is more than just an
              academic pursuit—it’s an opportunity for personal growth, global
              exposure, and a brighter future. Let us be your trusted partner in
              turning your dreams into reality!
            </p>
          </div>
          <ul className="achievement flex flex-wrap items-center justify-center gap-4 mt-6">
            {achievement.map(({ id, title, body }) => (
              <li
                key={id}
                className="text-center p-6 bg-primary/20 text-primary rounded-lg">
                <h3 className="text-[22px] leading-[22px] font-bold">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-[15px]">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
