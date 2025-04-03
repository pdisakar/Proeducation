import React from "react";
import Link from "next/link";
import Image from "next/image";

const email = process.env.NEXT_PUBLIC_EMAIL;
const phone = process.env.NEXT_PUBLIC_PHONE;
const address = process.env.NEXT_PUBLIC_ADDRESS;

const Navbar = () => {
  return (
    <div className="Navbar ">
      <div className="top-nav bg-third text-white py-[14px] hidden md:block">
        <div className="container">
          <div className="top-nav flex items-center justify-between">
            <div className="phone-number flex items-center gap-[6px]">
              <svg className="icon" width="20" height="20">
                <use xlinkHref="/icons.svg#phone" fill="currentColor"></use>
              </svg>
              <Link
                className=" text-sm"
                aria-label={`View https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/${phone}`}
              >
                {phone}
              </Link>
            </div>
            <div className="email-address flex items-center gap-[6px]">
              <svg className="icon" width="20" height="20">
                <use xlinkHref="/icons.svg#email" fill="currentColor"></use>
              </svg>
              <Link
                className=" text-sm"
                aria-label={`Send an email to ${email}`}
                href={`mailto:${email}`}
              >
                {email}
              </Link>
            </div>
            <div className="location flex items-center gap-[6px]">
              <svg className="icon" width="20" height="20">
                <use xlinkHref="/icons.svg#location" fill="currentColor"></use>
              </svg>
              <p className=" text-sm">{address}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="main-nav py-5">
          <div className="container flex justify-between items-center">
            <div className="logo">
              <Link href={"#"} className="w-[148px] h-[63px] md:w-[216px] ">
                <Image
                  src="/logo.svg"
                  alt="Kantipur Apartment"
                  height={63}
                  width={148}
                  className="h-full w-auto"
                />
              </Link>
            </div>
            <ul className="nav-item  hidden md:flex items-center text-sm font-medium gap-x-6 text-headings">
              <li>
                <Link href={"#"}>Destination</Link>
              </li>
              <li>
                <Link href={"#"}>Services</Link>
              </li>
              <li>
                <Link href={"#"}>About Us</Link>
              </li>
              <li>
                <Link href={"#"}>Review</Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className=" uppercase font-medium bg-third px-4 py-2 text-white rounded text-xs"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
