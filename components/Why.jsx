import React from "react";
import Lady from "../public/lady.png";
import Image from "next/image";

function Why() {
  return (
    //Head Title
    <div className="w-full bg-[#F6F9FF] ">
      <div className="w-full lg:h-[452px] bg-white pb-16 pt-16 lg:rounded-tl-[350px] lg:rounded-br-[350px] lg:pb-0">
        <div className="w-full max-w-[1024px] mx-auto">
          <div className="lg:w-[500px] mx-auto">
            <h1 className="text-center text-[40px] text-[#032254] font-bold">
              Why Choose <span className="text-[#2DABE1]">OndevX</span>
            </h1>
            <p className="text-center text-[#5C636D]">
              Lorem ipsum dolor sit amet consectetur. Urna augue sed gravida
              nibh elementum fermentum at.
            </p>
          </div>

          <div className="w-full max-w-[1024px] lg:mt-20 lg:mb-[-60px] mx-auto lg:flex lg:justify-between px-5 flex-wrap">
            <div className="w-[297px] h-[233px] shadow-lg hover:shadow-xl bg-[#F6F8FF] rounded-[20px] transition-shadow duration-300 ease-out mx-auto">
              <div className="flex gap-7 items-center m-[20px]">
                <img src="service.png" alt="" className="w-[40px]" />
                <h3 className="">Service1</h3>
              </div>
              <div className="mx-[20px] my-[40px]">
                ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh
              </div>
            </div>

            <div className="w-[297px] h-[233px] shadow-lg hover:shadow-xl bg-[#F6F8FF] rounded-[20px] transition-shadow duration-300 ease-out mx-auto">
              <div className="flex gap-7 items-center m-[20px]">
                <img src="24.png" alt="" className="w-[40px]" />
                <h3 className="">Service2</h3>
              </div>
              <div className="mx-[20px] my-[40px]">
                ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh
              </div>
            </div>

            <div className="w-[297px] h-[233px] shadow-lg hover:shadow-xl bg-[#F6F8FF] rounded-[20px] transition-shadow duration-300 ease-out mx-auto">
              <div className="flex gap-7 items-center m-[20px]">
                <img src="login.png" alt="" className="w-[40px]" />
                <h3 className="">Service3</h3>
              </div>
              <div className="mx-[20px] my-[40px]">
                ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1024px] mx-auto">
        <div className="w-full pt-28 grid lg:grid-cols-2 relative">
          <div className="w-full px-4 lg:px-0">
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

          <div className="relative hidden lg:block">
            <Image src={Lady} alt="lady" className="w-96 z-1 ml-auto" />
            <div className="absolute top-[50%] left-[30%] w-[250px] h-[200px] bg-purple-700 blur-[110px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
