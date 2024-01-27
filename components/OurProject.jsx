"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../app/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Project1 from "../public/images/project1.png";
import Project2 from "../public/images/project2.png";
import Project3 from "../public/images/project1.png";
import { useRef } from "react";

export default function OurProject() {
  const swiperRef = useRef();
  return (
    <div className="our-project-redial-bg relative" id="projects">
      <div className="w-full max-w-[1024px] mx-auto py-12 px-4 ">
        <div>
          <h1 className="text-[40px] font-bold text-[#032254]">Our Projects</h1>
          <p>
            We help product vendors create impactful and futuristic digital
            solutions to solve real user problems. ​
          </p>
        </div>
        <div className="mt-16 relative">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            observer={true}
            observeParents={true}
            parallax={true}
            pagination={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className=" bg-slate-500 min-h-[291px]">
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
              <div className=" bg-slate-500 min-h-[291px]">
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
              <div className=" bg-slate-500 min-h-[291px]">
                <Image
                  src={Project3}
                  alt="Project3"
                  fill
                  priority
                  loading="eager"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="hidden xl:block">
            <button
              className="absolute -right-14 top-[50%] translate-y-[-50%] z-10"
              onClick={() => swiperRef.current.slideNext()}
            >
              <img
                src="/images/right-button.png"
                alt="right hand side button"
              />
            </button>
            <button
              className="absolute -left-14 top-[50%] translate-y-[-50%] z-10"
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
