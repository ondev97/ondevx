import React from "react";
import Lady from "../public/lady.png";
import Image from "next/image";

function Why() {
  return (
    //Head Title
    <div className="w-full bg-[#F6F9FF]" id="whyChoose">
      <div className="w-full lg:h-[452px] bg-white pb-16 pt-16 lg:rounded-tl-[350px] lg:rounded-br-[350px] lg:pb-0">
        <div className="w-full max-w-[1024px] mx-auto">
          <div className="lg:w-[500px] mx-auto">
            <h1 className="text-center text-[40px] text-[#032254] font-bold">
              Why Choose <span className="text-[#2DABE1]">OndevX</span>
            </h1>
            <p className="text-center text-[#5C636D]">
              At OndevX, we pride ourselves on delivering excellence in every
              aspect
            </p>
          </div>

          <div className="w-full max-w-[1024px] mt-5 lg:mt-20 lg:mb-[-60px] mx-auto sm:flex sm:justify-between px-5 flex-wrap gap-y-2">
            <div className="w-full md:w-[297px] h-[233px] shadow-lg hover:shadow-xl bg-[#F6F8FF] rounded-[20px] transition-shadow duration-300 ease-out mx-auto">
              <div className="flex gap-7 items-center m-[20px]">
                <img src="service.png" alt="" className="w-[40px]" />
                <h3 className="">Innovation Beyond Limits</h3>
              </div>
              <div className="mx-[20px] my-[10px] text-sm text-all">
                Discover limitless possibilities at Ondevx Technologies. Our
                skilled team blends technical expertise with creative flair,
                ensuring your projects exceed expectations. Experience
                outstanding results with us.
              </div>
            </div>

            <div className="w-full md:w-[297px] h-[233px] shadow-lg hover:shadow-xl bg-[#F6F8FF] rounded-[20px] transition-shadow duration-300 ease-out mx-auto">
              <div className="flex gap-7 items-center m-[20px]">
                <img src="24.png" alt="" className="w-[40px]" />
                <h3 className="">Innovation Unleashed</h3>
              </div>
              <div className="mx-[20px] my-[10px] text-sm text-all">
                Choose Ondevx Technologies for a transformative journey in
                digital solutions. Beyond developers, we're innovators crafting
                AI advancements and user-friendly interfaces. Every turn with us
                opens new possibilities.
              </div>
            </div>

            <div className="w-full md:w-[297px] h-[233px] shadow-lg hover:shadow-xl bg-[#F6F8FF] rounded-[20px] transition-shadow duration-300 ease-out mx-auto">
              <div className="flex gap-7 items-center m-[20px]">
                <img src="login.png" alt="" className="w-[40px]" />
                <h3 className="">Your Success</h3>
              </div>
              <div className="mx-[20px] my-[10px] text-sm text-all">
                At Ondevx Technologies, we're more than service providers –
                we're your dedicated success partner. Choose us for a
                collaborative journey where our unwavering focus is ensuring
                your organization thrives online.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1024px] mb-3 lg:mb-0 mx-auto">
        <div className="w-full py-5 md:pt-28 md:pb-0 grid lg:grid-cols-2 relative">
          <div className="w-full px-4 lg:px-0">
            <p>
              We work as a team to transform your idea into a virtual reality
              that makes your business a leading model on the internet. Further,
              our goal is to offer sustainability through the solutions we
              produce to fulfil any of the existing or future needs of our
              customers.
            </p>

            {/* <div className="flex mt-10 gap-3">
              <div className="">Learn More</div>
              <img src="arrow.png" alt="" />
            </div> */}
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
