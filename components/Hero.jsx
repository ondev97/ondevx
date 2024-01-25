import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import HeroImage from "../public/hero.jpg";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div>
        <div className="w-full h-screen relative hero-gradient">
          <Image
            src={HeroImage}
            alt="hero image"
            priority
            className="opacity-75 brightness-50 w-full h-full object-cover"
          />
        </div>

        <div className="lg:max-w-[800px] mx-auto px-4 absolute top-[50%] md:left-[50%] md:translate-x-[-50%] translate-y-[-50%]">
          <div className="w-full flex flex-col">
            <h3 className="md:text-[20px] text-[16px] text-white">
              Welcome to <span className="text-[#2DABE1]">OndevX</span>{" "}
              Technologies
            </h3>
            <h1 className="font-bold text-[36px] md:text-[48px] text-white">
              Let’s Create an Outstanding Product
            </h1>
            <Link href="#" className="mt-4 flex items-center gap-3">
              <h3 className="text-white md:text-[16px] text-[14px] ">
                Learn More
              </h3>
              <FaArrowRight color="white" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
