import React from "react";
import Banner from "../components/Banner";
import ContactUsBannerImg from "../assets/images/contactUsBanner-img.webp";

import LocationIcon from "../assets/icons/location-icon.svg";
import Button from "../components/Button";
import BusinessEnquiriesIcon from "../assets/icons/businessEnquiries-icon.svg";
import PlantQuarriesIcon from "../assets/icons/plantQuarries-icon.svg";
import EmailIcon from "../assets/icons/email-icon.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import Social from "../sections/Social";

const ContactUs = () => {
  return (
    <section className="w-full">
        {/* Banner Section */}
      <Banner bannerText="contact us" bgImage={ContactUsBannerImg} />

      <div className="w-full container grid md:grid-cols-2 gap-8 md:gap-0 pt-8 lg:pt-14 bg-red-60">
        <div className="w-full flex flex-col items-center gap-8 text-center lg:py-10 ">
            {/* Corporate Office Address */}
          <div className="flex flex-col items-center w-[80%] lg:w-[60%] gap-3 lg:gap-5 ">
            <img src={LocationIcon} alt="Location icon" className="w-8 h-8" />
            <h3 className="font-primary font-semibold text-2xl ">
              corporate office
            </h3>
            <p className="font-primary font-light text-lg text-grayText ">
              C - 3430, Green Fields Colony, Sector - 43, Faridabad - 121003,
              Haryana, INDIA
            </p>
          </div>
          {/* Plant Address */}
          <div className="w-[80%] lg:w-[60%] flex flex-col gap-3 lg:gap-5 items-center text-center">
            <h3 className="font-primary font-semibold text-2xl">
              plant address
            </h3>
            <p className="font-primary font-light text-lg text-grayText">
              Building No.: 68 - 69, Pragati Vihar Industrial Area, Sector-59,
              Ballabgarh, Faridabad - 121004, Haryana, INDIA
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action=""
          className="bg-red-40 flex flex-col py-6 lg:py-10 px-6 lg:px-11 gap-6 w-full bg-[#F5F5F5] rounded-2xl"
        >
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="font-primary font-semibold text-sm text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              autoComplete="off"
              className="outline-none select-none border-[#8D8D8D] border-b-2 p-2 bg-[#F5F5F5]"
            />
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col ">
              <label
                htmlFor="email"
                className="font-primary font-semibold text-sm text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="outline-none select-none border-[#8D8D8D] border-b-2 p-2 bg-[#F5F5F5]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="font-primary font-semibold text-sm text-black"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                className="outline-none select-none border-[#8D8D8D] border-b-2 p-2 bg-[#F5F5F5]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="font-primary font-semibold text-sm text-black"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="outline-none select-none border-[#8D8D8D] border-b-2 p-2 bg-[#F5F5F5]"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="font-primary font-semibold text-sm text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="outline-none select-none border-[#8D8D8D] border-b-2 p-2 pb-14 bg-[#F5F5F5]"
            ></textarea>
          </div>
          <div className="pt-3">
            <Button buttonText="submit" type="submit" />
          </div>
        </form>
      </div>
      {/* Contact Information Cards */}
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 lg:pt-14">
          <article className="flex flex-col justify-start items-center gap-3 p-5">
            <figure>
              <img
                src={BusinessEnquiriesIcon}
                alt="Business Enquiries Icon"
                className="w-8 h-8"
              />
            </figure>
            <h2 className="font-primary font-semibold text-2xl capitalize text-grayText">
              business enquiries
            </h2>
            <address className="text-center not-italic">
              <p className="font-primary font-light text-lg capitalize text-grayText ">
                pranay mishra
              </p>
              <p className="font-primary font-light text-lg uppercase text-grayText">
                CEO
              </p>
              <p className="font-primary font-light text-lg text-grayText">
                ceo@jaspergroup.in
              </p>
            </address>
          </article>
          <article className="flex flex-col justify-start items-center gap-3  p-5">
            <figure>
              <img
                src={PlantQuarriesIcon}
                alt="Plant Quarries Icon"
                className="w-8 h-8"
              />
            </figure>
            <h2 className="font-primary font-semibold text-2xl capitalize text-grayText">
              Plant Quarries
            </h2>
            <address className="text-center not-italic">
              <p className="font-primary font-light text-lg capitalize text-grayText ">
                Shahid Khan
              </p>
              <p className="font-primary font-light text-lg uppercase text-grayText">
                Plant Head
              </p>
              <p className="font-primary font-light text-lg text-grayText">
                planthead@jaspergroup.in
              </p>
            </address>
          </article>
          <article className="flex flex-col justify-start items-center gap-3  p-5">
            <figure>
              <img src={EmailIcon} alt="Email Icon" className="w-8 h-8" />
            </figure>
            <h2 className="font-primary font-semibold text-2xl capitalize text-grayText">
              Email
            </h2>
            <address className="text-center not-italic">
              <p className="font-primary font-light text-lg text-grayText">
                info@jaspergroup.in
              </p>
            </address>
          </article>
          <article className="flex flex-col justify-start items-center gap-3 p-5">
            <figure>
              <img src={PhoneIcon} alt="Phone Icon" className="w-8 h-8" />
            </figure>
            <h2 className="font-primary font-semibold text-2xl capitalize text-grayText">
              phone
            </h2>
            <address className="text-center not-italic">
              <p className="font-primary font-light text-lg text-grayText">
                +91 99998 72292
              </p>
            </address>
          </article>
        </div>
        <Social/>
      </div>
    </section>
  );
};

export default ContactUs;
