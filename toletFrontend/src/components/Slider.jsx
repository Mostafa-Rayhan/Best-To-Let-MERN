import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={true}
        showIndicators={false}
        interval={2000}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        <div className="!h-[65vh] lg:!h-[80vh] relative">
          <img
            className="w-full h-full object-cover filter brightness-75"
            src="/assets/banner (1).jpg"
          />

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
            <div>
              <h3
                data-aos-duration="2000"
                data-aos="fade-right"
                className="text-[#FFF001] text-5xl  md:text-7xl  headingCarousel font-bold tracking-wider "
              >
                {" "}
                Get best rents from us
              </h3>
              <p
                data-aos-duration="2000"
                data-aos="fade-left"
                className="text-white text-2xl md:text-3xl  headingCarousel font-bold tracking-wider "
              >
                Here you will get the best rents
              </p>
            </div>
          </div>
        </div>
        <div className="!h-[65vh] lg:!h-[80vh] relative">
          <img
            className="w-full h-full object-cover filter brightness-75"
            src="/assets/banner (3).jpg"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
            <div>
              <h3
                data-aos-duration="2000"
                data-aos="fade-right"
                className="text-[#FFF001] text-5xl  md:text-7xl  headingCarousel font-bold tracking-wider "
              >
                {" "}
                More than 500+ satified People
              </h3>
              <p
                data-aos-duration="2000"
                data-aos="fade-left"
                className="text-white text-2xl md:text-3xl  headingCarousel font-bold tracking-wider "
              >
                We have good response from the clients
              </p>
            </div>
          </div>
        </div>
        <div className="!h-[65vh] lg:!h-[80vh] relative">
          <img
            className="w-full h-full  object-cover filter brightness-75"
            src="/assets/banner (2).jpg"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
            <div>
              <h3
                data-aos-duration="2000"
                data-aos="fade-right"
                className="text-[#FFF001] text-5xl  md:text-7xl  headingCarousel font-bold tracking-wider "
              >
                More than 500+ satified People
              </h3>
              <p
                data-aos-duration="2000"
                data-aos="fade-left"
                className="text-white text-2xl md:text-3xl  headingCarousel font-bold tracking-wider   "
              >
                More than 100+ rents with super quality
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
