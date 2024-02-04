import React from "react";

function OurServices() {
  return (
    <div className="bg-[#F6F7FF] py-20" id="services">
      <div className="w-full max-w-[1024px] mx-auto px-5">
        <div>
          <h1 className="text-[40px] font-bold text-[#032254]">Our Services</h1>
          <p>
            Discover the essence of innovation through our featured services.
            Tailored software, secure cloud solutions, streamlined DevOps, and
            intelligent AI integration – all designed to elevate your business.​
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          <div className="w-full h-[233px] shadow-md hover:shadow-lg bg-white rounded-3xl transition duration-300 ease-in">
            <div className="flex gap-7 items-center m-[20px]">
              <img src="service.png" alt="" className="w-[40px]" />
              <h3 className="">Tailored software Solutions</h3>
            </div>
            <div className="mx-[20px] my-[30px]">
              We develop customized software solutions according to your
              requirements.
            </div>
          </div>

          <div className="w-full h-[233px] shadow-md hover:shadow-lg rounded-3xl bg-white transition duration-300 ease-in">
            <div className="flex gap-7 items-center m-[20px]">
              <img src="service.png" alt="" className="w-[40px]" />
              <h3 className="">Cloud based solutions</h3>
            </div>
            <div className="mx-[20px] my-[30px]">
              We specialize in creating scalable and secure cloud
              infrastructures, along with deploying and managing cloud-based
              applications.
            </div>
          </div>

          <div className="w-full h-[233px] shadow-md hover:shadow-lg rounded-3xl bg-white transition duration-300 ease-in">
            <div className="flex gap-7 items-center m-[20px]">
              <img src="service.png" alt="" className="w-[40px]" />
              <h3 className="">DevOps Services</h3>
            </div>
            <div className="mx-[20px] my-[30px]">
              We provide end to end CI/CD solutions integrating developments and
              operations together.
            </div>
          </div>
        </div>

        {/* <div className="flex mt-10 gap-3">
          <div className="">LEARN MORE</div>
          <img src="arrow.png" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default OurServices;
