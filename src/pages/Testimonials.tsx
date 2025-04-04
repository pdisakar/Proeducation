import React from "react";

const testimonials = [
  {
    name: "John Doe",
    date: "Sept, 20 2024",
    body: "An amazing journey! The guides were knowledgeable, the destinations beautiful, and I felt safe every step of the way...",
  },
  {
    name: "Jane Smith",
    date: "Sept, 20 2024",
    body: "An amazing journey! The guides were knowledgeable, the destinations beautiful, and I felt safe every step of the way...",
  },
  {
    name: "Alice Johnson",
    date: "Sept, 20 2024",
    body: "An amazing journey! The guides were knowledgeable, the destinations beautiful, and I felt safe every step of the way...",
  },
];

const Testimonials = () => {
  return (
    <div className="common-box !pt-0">
      <div className="container">
        <div className="title text-center">
          <h2>Student’s Review</h2>
        </div>
        <ul className="testimonial-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <li
              key={index}
              className="testimonial-item p-6 border border-muted/20 rounded-lg relative"
            >
              <p className="text-[15px] leading-[170%] text-muted">
                {testimonial.body}
              </p>
              <div className="about-author flex items-center mt-[20px]">
                <div className="avatar  mr-[10px] w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg">
                  {testimonial.name?.charAt(0).toUpperCase()}
                </div>
                <div className="other-info">
                  <p className="text-base text-headings font-medium">
                    {testimonial.name}
                  </p>
                  <p className=" text-xs text-muted ">{testimonial.date}</p>
                </div>
              </div>

              <svg
                className="icon text-primary absolute -top-3 right-6 bg-body-bg px-1 w-fit"
                width="25"
                height="22"
              >
                <use
                  xlinkHref={`/icons.svg#doublequote`}
                  fill="currentColor"
                ></use>
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
