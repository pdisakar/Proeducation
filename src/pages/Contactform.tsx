import Link from "next/link";
import React from "react";

const email = process.env.NEXT_PUBLIC_EMAIL;
const phone = process.env.NEXT_PUBLIC_PHONE;
const address = process.env.NEXT_PUBLIC_ADDRESS;

const facebook = process.env.NEXT_PUBLIC_FACEBOOK;
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM;
const X = process.env.NEXT_PUBLIC_X;

const Contactform = () => {
  return (
    <div className="common-box !pt-0">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="info">
            <div className="title">
              <h2>Contact Us</h2>
              <p>{address}</p>
            </div>
            <ul className="remote-connection mt-6 ">
              <li className="call flex items-center gap-3">
                <svg className="icon text-primary" width="32" height="32">
                  <use xlinkHref="/icons.svg#phone2" fill="currentColor"></use>
                </svg>
                <div className="info">
                  <p className=" text-sm text-muted leading-[14px] mb-1">
                    Whatsapp or Viber
                  </p>
                  <Link
                    className=" text-lg leading-[18px] text-primary font-semibold"
                    aria-label={`View https://wa.me/${phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/${phone}`}
                  >
                    {phone}
                  </Link>
                </div>
              </li>
              <li className="email flex items-center gap-3 mt-6">
                <svg className="icon text-primary" width="32" height="32">
                  <use xlinkHref="/icons.svg#email2" fill="currentColor"></use>
                </svg>
                <div className="info">
                  <p className=" text-sm text-muted leading-[14px] mb-1">
                    Whatsapp or Viber
                  </p>
                  <Link
                    className=" text-lg leading-[18px] text-primary font-semibold"
                    aria-label={`Send an email to ${email}`}
                    href={`mailto:${email}`}
                  >
                    {email}
                  </Link>
                </div>
              </li>
            </ul>
            <div className="social-media">
              <ul className="flex items-center gap-3 mt-6">
                <li className="facebook">
                  <Link
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook"
                  >
                    <svg
                      className="icon text-primary hover:text-secondary"
                      width="22"
                      height="22"
                    >
                      <use
                        xlinkHref="/icons.svg#facebook"
                        fill="currentColor"
                      ></use>
                    </svg>
                  </Link>
                </li>
                <li className="instagram">
                  <Link
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram"
                  >
                    <svg
                      className="icon text-primary hover:text-secondary"
                      width="22"
                      height="22"
                    >
                      <use
                        xlinkHref="/icons.svg#instagram"
                        fill="currentColor"
                      ></use>
                    </svg>
                  </Link>
                </li>
                <li className="whatsapp">
                  <Link
                    href={`https://wa.me/${phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <svg
                      className="icon text-primary hover:text-secondary"
                      width="22"
                      height="22"
                    >
                      <use
                        xlinkHref="/icons.svg#whatsapp"
                        fill="currentColor"
                      ></use>
                    </svg>
                  </Link>
                </li>
                <li className="x">
                  <Link
                    href={X}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our X (Twitter)"
                  >
                    <svg
                      className="icon text-primary hover:text-secondary"
                      width="22"
                      height="22"
                    >
                      <use xlinkHref="/icons.svg#x" fill="currentColor"></use>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-form p-8 bg-primary/10 rounded-lg lg:col-span-2">
            <form
              className="flex flex-col gap-5 text-primary"
              id="contact_form"
            >
              <div className="grid md:grid-cols-2 gap-3">
                <div className="innput-group">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="first_name px-3 py-3 w-full rounded-[4px]"
                    required
                    name="f_name"
                  />
                </div>
                <div className="innput-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="last_name px-3 py-3 w-full rounded-[4px]"
                    required
                    name="l_name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="innput-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="email px-3 py-3 w-full rounded-[4px]"
                    required
                    name="email"
                  />
                </div>
                <div className="innput-group">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="phnumber px-3 py-3 w-full rounded-[4px]"
                    required
                    name="phone"
                  />
                </div>
              </div>

              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Message"
                className="px-3 py-3 w-full rounded-[4px]"
                required
              ></textarea>

              <button
                type="submit"
                className="btn w-fit bg-primary px-[18px] py-[7px] rounded-[4px] text-white font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
