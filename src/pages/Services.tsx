import React from 'react';

const services = [
  { icon: 'career', title: 'Career Support' },
  { icon: 'departure', title: 'Departure Assistance' },
  { icon: 'documents', title: 'Document Guidance' },
  { icon: 'flight', title: 'Flight Booking' },
  { icon: 'ielts', title: 'IELTS Preparation' },
  { icon: 'scholarships', title: 'Scholarships' },
  { icon: 'university', title: 'University Guidance' },
  { icon: 'manymore', title: 'Many More' },
];

const Services = () => {
  return (
    <div className="common-box !pt-0">
      <div className="container">
        <div className="title flex items-center flex-col text-center">
          <h2>Services we offer you</h2>
          <p>
            We provide tailored support for your self-application journey, from
            crafting strong applications to guidance on visas and interviews,
            ensuring your success.
          </p>
        </div>
        <ul className="service-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center mt-8">
          {services.map((service, index) => (
            <li
              key={index}
              className="service-item group flex flex-col items-center justify-center text-center border border-muted/20 p-11 rounded-[4px] transition-all duration-300 hover:bg-primary/10 hover:cursor-pointer hover:border-primary/50">
              <svg
                className="icon w-18 h-18 transition-all text-primary group-hover:text-primary/50 duration-300 group-hover:scale-110"
                width="72"
                height="72">
                <use
                  xlinkHref={`/icons.svg#${service.icon}`}
                  fill="currentColor"></use>
              </svg>
              <p className="text-sm text-headings font-semibold mt-4 transition-all duration-300 group-hover:text-primary">
                {service.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
