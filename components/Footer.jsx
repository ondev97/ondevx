import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFaceAngry,
  faHamburger,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="w-Full bg-[#032254]">
        <footer className="w-full max-w-[1024px] mx-auto bg-slate-20">
          <div className="pt-7 px-4 lg-mx-0 text-slate-50 flex justify-between flex-wrap md:flex-nowrap gap-4">
            <div className="w-full md:w-[200px]">
              <div>
                <img className="w-24 mb-7" src="L2.png" alt="" />
              </div>
              <div className="mb-7 text-sm">
                elit.Obcaecati eaquuptatem nulla ullam magnam minima! Iusto,{" "}
              </div>
              <div className="flex gap-7">
                <a href="www.facebook.com">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-[20px]"
                  ></FontAwesomeIcon>
                </a>
                <a href="x.com">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="w-[20px]"
                  ></FontAwesomeIcon>
                </a>
                <a href="linkedin.com">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="w-[20px]"
                  ></FontAwesomeIcon>
                </a>
                <a href="instagram.com">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-[20px]"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="">
              <div className="mb-7 text-[18px]">Navigation</div>
              <div className="list-none">
                <li className="mb-2">
                  <Link href="./" className="text-sm">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#services" className="text-sm">
                    Our Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#projects" className="text-sm">
                    Our project
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#about" className="text-sm">
                    About
                  </Link>
                </li>
              </div>
            </div>
            <div className="">
              <div className="mb-7 text-[18px] text-sm">Contacts</div>
              <div className="mb-2 text-sm">+94 123 456 456</div>
              <div className="mb-2 text-sm">contact@ondevx.com</div>
              <div className="mb-2 text-sm">contact@ondevx.com</div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-white mt-7 border-t-2 pt-7 pb-2 px-4 lg-mx-0">
              <div>
                <a href="" className="text-xs md:text-sm">
                  Copyright © 2024 ondevx. All Rights Reserved.
                </a>
              </div>
              <div>
                <a href="" className="text-xs md:text-sm">
                  User Terms & Conditions | Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
