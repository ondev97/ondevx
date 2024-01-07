import React from "react";
import Lady from "../public/lady.png";
import Image from "next/image";

function Why() {
  return (
    //Head Title
    <div className="w-full bg-[#F6F9FF]">
      <div className="w-full h-[452px] bg-white pt-16 md:rounded-tl-[350px] md:rounded-br-[350px] sm:rounded-tl-[150px] sm:rounded-br-[150px] rounded-tl-[150px] rounded-br-[150px]">
        <div className="w-full max-w-[1024px] mx-auto">
          <div className="md:w-[500px] sm:w-[400px] w-[300px] mx-auto">
            <h1 className="text-center text-[2rem] md:text-5xl  text-[#032254] font-bold">
              Why Choose <span className="text-[#2DABE1]">OndevX</span>
            </h1>
            <p className="mt-4 text-center text-[#5C636D]">
            Ondevx Technologies is your dedicated partner in success,not just a provider of services.
            </p>
          </div>

          <div className="w-full max-w-[1024px] mt-20 mb-[-60px] justify-center grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 place-items-center">
            <div className="w-[297px] h-[233px] shadow-xl bg-[#F6F8FF] rounded-[20px]">
              <div className="flex gap-7 items-center m-[20px]">
                <img src="service.png" alt="" className="w-[40px]" />
                <h3 className="text-[#032254] font-bold">Expertise Beyond Boundaries</h3>
              </div>
              <div className="mx-[20px] my-[40px]">
                ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh
              </div>
            </div>

            <div className="w-[297px] h-[233px] shadow-xl bg-[#F6F8FF] rounded-[20px]">
              <div className="flex gap-7 items-center m-[20px]">
                <img src="24.png" alt="" className="w-[40px]" />
                <h3 className="text-[#032254] font-bold">Innovation at Every Turn</h3>
              </div>
              <div className="mx-[20px] my-[40px]">
                ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh
              </div>
            </div>

            <div className="w-[297px] h-[233px] shadow-xl bg-[#F6F8FF] rounded-[20px]">
              <div className="flex gap-7 items-center m-[20px]">
                <img src="login.png" alt="" className="w-[40px]" />
                <h3 className="text-[#032254] font-bold">Our Mission, Your Success</h3>
              </div>
              <div className="mx-[20px] my-[40px]">
                ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="w-full flex max-w-[1024px] mx-auto">
        <div className="pt-28 grid grid-cols-2 sm:grid-cols-1 relative">
          <div>
            <p>
              We work as a team to transform your idea into a virtual reality
              that makes your business a leading model on the internet. Further,
              our goal is to offer sustainability through the solutions we
              produce to fulfil any of the existing or future needs of our
              customers.
            </p>

            <div className="flex mt-10 gap-3">
              <div className="">Learn More</div>
              <img src="arrow.png" alt="" />
            </div>
          </div>

          <div className="relative">
            <Image src={Lady} alt="lady" className="w-96 z-1 ml-auto" />
            <div className="absolute top-[50%] left-[30%] w-[250px] h-[200px] bg-purple-700 blur-[110px]"></div>
          </div>
        </div>
      </div>*/}
    </div>
  );
}

export default Why;
