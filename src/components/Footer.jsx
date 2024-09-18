import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo from "/src/assets/images/logo.svg";
import phoneIcon from "/src/assets/images/icon-phone.svg";
import emailIcon from "/src/assets/images/icon-email.svg";
import locationIcon from "/src/assets/images/icon-location.svg";

function Footer() {
  let contact = [
    {
      icon: phoneIcon,
      text: "+1-543-123-4567",
    },
    {
      icon: emailIcon,
      text: "example@example.com",
    },
  ];

  let links = [
    "About Us",
    "Jobs",
    "Press",
    "Blog",
    "Contact Us",
    "Terms",
    "Privacy Policy",
  ];

  let socialIcons = ["Facebook", "Twitter", "Instagram"];

  return (
    <section className="bg-[#0c1524] pt-[350px] md:pt-[270px] pb-[100px]">
      <div className="container">
        <a href="/">
          <img src={logo} alt="Logo" className="w-[150px] object-contain" />
        </a>

        <div className="mt-[30px] text-white flex flex-wrap justify-between gap-[30px] flex-col md:flex-row">
          <div className="w-[340px] max-w-full flex items-center gap-[15px]">
            <img
              src={locationIcon}
              alt="Location Img"
              className="w-[18px] h-[18px] object-contain"
            />

            <p className="font-normal  text-sm tracking-[.7px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, perspiciatis adipisci quis perferendis est dolorum ab.
              Molestias, porro odit temporibus error tenetur sequi hic ex?
              Aspernatur fugiat ullam nam odio.
            </p>
          </div>

          <div>
            {contact.map((item, index) => (
              <div
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
                key={index}
              >
                <img
                  src={item.icon}
                  alt="Contact Img"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
            {links.map((link) => (
              <li>
                <a
                  href="/"
                  className="text-primary hover:text-white transition-all duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-[15px] w-full md:w-auto justify-center">
            {socialIcons.map((socialIcon) => (
              <li>
                <a href="/">
                  <div className="w-[40px] h-[40px] rounded-full center-element border border-white">
                    {socialIcon === "Facebook" ? (
                      <FaFacebookF />
                    ) : socialIcon === "Twitter" ? (
                      <FaTwitter />
                    ) : (
                      <FaInstagram />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
