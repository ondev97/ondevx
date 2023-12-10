import Image from "next/image";
import React from "react";
import contactUs from "../public/images/contactUs.png";

const ContactUs = () => {
  return (
    <div className="bg-[#F6F7FF]">
      <div className="mt-10 w-full max-w-[1024px] mx-auto py-4 ">
        <div>
          <h1 className="text-[40px] font-bold text-[#032254]">Contact Us</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <Image src={contactUs} alt="contact us svg" />
          </div>
          <div className="flex-1">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full px-1 py-3 rounded"
                />
              </div>
              <div className="mb-4 flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-1 py-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-1 py-3 rounded"
                />
              </div>
              <div className="mb-4">
                <textarea
                  type="text"
                  placeholder="Message"
                  className="w-full px-1 py-3 rounded"
                  rows={6}
                />
              </div>
              <div>
                <input
                  type="submit"
                  className="w-full text-center bg-[#31295A] py-3 rounded text-white"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
