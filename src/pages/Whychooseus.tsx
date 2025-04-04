import React from "react";

const services = [
  {
    icon: "expert",
    title: "Expert Guidance",
    description:
      "Our experienced consultants provide personalized support, guiding you through every step of your study abroad journey to ensure a smooth and efficient process.",
  },
  {
    icon: "application",
    title: "Application Support",
    description:
      "We develop customized strategies tailored to your profile, maximizing your chances of securing admission to top global universities and programs.",
  },
  {
    icon: "interview",
    title: "Interview Prep",
    description:
      "We offer detailed guidance on visa applications, ensuring you meet all requirements, and provide expert preparation for interviews to help you succeed.",
  },
  {
    icon: "proven",
    title: "Proven Success",
    description:
      "With a proven track record of helping students gain admission to prestigious universities worldwide, we are fully committed to securing your academic future.",
  },
];

const Whychooseus = () => {
  return (
    <div className="common-box !pt-0">
      <div className="container">
        <div className="title flex items-center flex-col text-center">
          <h2>Why choose us</h2>
          <p>
            We provide tailored support for your self-application journey, from
            crafting strong applications to guidance on visas and interviews,
            ensuring your success.
          </p>
        </div>
        <ul className="service-list grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {services.map((service, index) => (
            <li
              key={index}
              className="service-item group flex flex-col items-center justify-center text-center border border-muted/20 p-2 md:p-4 lg:p-6 rounded-[4px] transition-all duration-300 hover:bg-primary/10 hover:cursor-pointer hover:border-primary/50"
            >
              <svg
                className="icon transition-all text-primary group-hover:text-primary/50 duration-300 group-hover:scale-110"
                width="72"
                height="72"
              >
                <use
                  xlinkHref={`/icons.svg#${service.icon}`}
                  fill="currentColor"
                />
              </svg>
              <h3 className="text-base text-headings font-semibold my-4 transition-all duration-300 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-[15px] leading-[170%] text-muted">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Whychooseus;
