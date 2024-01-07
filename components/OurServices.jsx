import React from "react";

function OurServices() {
  return (
    <>
      <div className="w-full max-w-[1024px] mx-auto px-4 mt-20">
        <div>
          <h1 className="text-[40px] font-bold text-[#032254]">Our Services</h1>
          <p>
            We help product vendors create impactful and futuristic digital
            solutions to solve real user problems. ​
          </p>
        </div>

        <div className="mx-auto grid justify-items-center md:grid-cols-3 md:gap-10 mt-20 sm:grid-cols-2 sm:gap-10 grid-cols-1 gap-10">
          <div className="w-[297px] h-[233px] shadow-lg shadow-indigo-500/50 bg-blue-100 rounded-[20px] overflow-hidden">
            <div className="flex gap-7 items-center m-[20px]">
              <img src="service.png" alt="" className="w-[40px]" />
              <h3 className="">Full Stack Development</h3>
              
            </div>
            <div className="mx-[20px] ">
            Our Full Stack Development services encompass the entire spectrum of web application development.
              <div className="my-[20px]">
                <h2>SEE MORE</h2>
              </div>
            </div>
          </div>

          <div className="w-[297px] h-[233px] shadow-lg shadow-indigo-500/50 bg-blue-100 rounded-[20px] overflow-hidden">
            <div className="flex gap-7 items-center m-[20px]">
              <img src="service.png" alt="" className="w-[40px]" />
              <h3 className="">AI Development</h3>
              
            </div>
            <div className="mx-[20px] ">
            AI development services leverage advanced algorithms and machine learning techniques to empower your systems with intelligent capabilities.
              <div className="my-[20px]">
                <h2>SEE MORE</h2>
              </div>
            </div>
          </div>

          <div className="w-[297px] h-[233px] shadow-lg shadow-indigo-500/50 bg-blue-100 rounded-[20px]">
            <div className="flex gap-7 items-center m-[20px]">
              <img src="service.png" alt="" className="w-[40px]" />
              <h3 className="">Mobile Application Development</h3>
            </div>
            <div className="mx-[20px] my-[40px]">
              ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh
            </div>
          </div>

          <div className="w-[297px] h-[233px] shadow-lg shadow-indigo-500/50 bg-blue-100 rounded-[20px]">
            <div className="flex gap-7 items-center m-[20px]">
              <img src="service.png" alt="" className="w-[40px]" />
              <h3 className="">Cloud and DevOps</h3>
            </div>
            <div className="mx-[20px] my-[40px]">
              ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh
            </div>
          </div>

          <div className="w-[297px] h-[233px] shadow-lg shadow-indigo-500/50 bg-blue-100 rounded-[20px]">
            <div className="flex gap-7 items-center m-[20px]">
              <img src="service.png" alt="" className="w-[40px]" />
              <h3 className="">Wordpress Development</h3>
            </div>
            <div className="mx-[20px] my-[40px]">
              ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh
            </div>
          </div>

          <div className="w-[297px] h-[233px] shadow-lg shadow-indigo-500/50 bg-blue-100 rounded-[20px]">
            <div className="flex gap-7 items-center m-[20px]">
              <img src="service.png" alt="" className="w-[40px]" />
              <h3 className="">UI/UX Design</h3>
            </div>
            <div className="mx-[20px] my-[40px]">
              ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh
            </div>
          </div>
        </div>

        <div className="flex mt-10 gap-3">
          <div className="">LEARN MORE</div>
          <img src="arrow.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default OurServices;
