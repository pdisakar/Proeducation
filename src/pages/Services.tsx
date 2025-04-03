import React from "react";

const services = [
  { icon: "career", title: "Career Support" },
  { icon: "departure", title: "Departure Assistance" },
  { icon: "documents", title: "Document Guidance" },
  { icon: "flight", title: "Flight Booking" },
  { icon: "ielts", title: "IELTS Preparation" },
  { icon: "scholarships", title: "Scholarships" },
  { icon: "university", title: "University Guidance" },
  { icon: "manymore", title: "Many More" },
];

const Services = () => {
  return (
    <div className="common-box !pt-0 ">
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
              className="service-item flex flex-col items-center justify-center text-center border border-muted/20 py-11 px-11 rounded-[4px]"
            >
              <svg className="icon" width="72" height="72">
                <use
                  xlinkHref={`/icons.svg#${service.icon}`}
                  fill="currentColor"
                ></use>
              </svg>
              <p className=" text-sm text-headings font-semibold mt-4">
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
