"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../app/globals.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Project1 from "../public/images/project1.png";
import Project2 from "../public/images/project2.png";
import Project3 from "../public/images/project1.png";
import { useRef } from "react";

export default function OurProject() {
  const swiperRef = useRef();
  return (
    <div
      className="bg-gradient-to-r from-blue-300 to-transparent via-white"
      style={{
        background:
          "linear-gradient(303deg, rgba(75,175,254, / 18%) 0%, rgba(255,255,255,0) 44%)",
      }}
    >
      <div className="mt-10 w-full max-w-[1024px] mx-auto px-4 py-4">
        <div>
          <h1 className="text-[40px] font-bold text-[#032254]">Our Projects</h1>
          <p>
            We help product vendors create impactful and futuristic digital
            solutions to solve real user problems. ​
          </p>
        </div>
        <div className="mt-16 relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={"auto"}
            loop={true}
            observer={true}
            observeParents={true}
            parallax={true}
            initialSlide={2}
            centeredSlides
            pagination={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper"
          >
            <div className="max-w-[900px]">
              <SwiperSlide>
                <div className=" bg-slate-500 min-h-[291px] rounded-3xl overflow-hidden">
                  <Image
                    src={Project1}
                    alt="Project1"
                    fill
                    priority
                    loading="eager"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-slate-500 min-h-[291px] rounded-3xl overflow-hidden">
                  <Image
                    src={Project2}
                    alt="Project2"
                    fill
                    priority
                    loading="eager"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-slate-500 min-h-[291px] rounded-3xl overflow-hidden">
                  <Image
                    src={Project3}
                    alt="Project3"
                    fill
                    priority
                    loading="eager"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div>
            <button
              className="absolute hidden px-4 sm:block sm:-right-14 sm:top-[50%] sm:translate-y-[-50%] z-10"
              onClick={() => swiperRef.current.slideNext()}
            >
              <img
                src="/images/right-button.png"
                alt="right hand side button"
              />
            </button>
            <button
              className="absolute px-4 hidden sm:block sm:-left-14 sm:top-[50%] sm:translate-y-[-50%] z-10"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <img src="/images/left-button.png" alt="left hand side button" />
            </button>
          </div>
        </div>
        <div className="flex mt-10 gap-3">
          <div className="">SEE MORE</div>
          <img src="arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
}
