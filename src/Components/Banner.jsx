import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "./banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-xl h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/WxTZZJs/img3.webp" className="w-full" />
            <div className="absolute space-y-5 w-2/5 bg-gradient-to-r h-full from-[#151515] to-[#15151500] left-0 top-0 pl-20  flex items-center text-white">
              <div className="rounded-xl text-start space-y-4">
                <h2 className="text-3xl font-bold">
                  Study Union: Where Knowledge Meets Collaboration
                </h2>
                <p>
                  Join study groups, share resources, and engage in meaningful
                  discussions with peers who share your academic interests.
                  Together, we can achieve academic excellence
                </p>
                <div className="flex gap-4">
                  <button className="btn btn-secondary font-bold px-2">
                    Discover More
                  </button>
                  <button className="btn btn-primary font-bold px-2">
                    Latest Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/FqpQ3dY/img2.jpg" className="w-full" />
            <div className="absolute space-y-5 w-2/5 bg-gradient-to-r h-full from-[#151515] to-[#15151500] left-0 top-0 pl-20  flex items-center text-white">
              <div className="rounded-xl text-start space-y-4">
                <h2 className="text-3xl font-bold">
                  Study Union:Buzzing with Collaborative Learning
                </h2>
                <p>
                  Dive into a hive of activity as you join study groups, share
                  insights, and learn from your peers. With StudyHive, you'll
                  experience the power of collective knowledge in action.
                </p>
                <div className="flex gap-4">
                  <button className="btn btn-primary font-bold px-2">
                    Learn More
                  </button>
                  <button className="btn btn-secondary font-bold px-2">
                    Latest news
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/bsLQqPX/img1.jpg" className="w-full" />
            <div className="absolute space-y-5 w-2/5 bg-gradient-to-r h-full from-[#151515] to-[#15151500] left-0 top-0 pl-20  flex items-center text-white">
              <div className="rounded-xl text-start space-y-4">
                <h2 className="text-3xl font-bold">
                  Study Union: Buzzing with Collaborative Learning
                </h2>
                <p>
                  Dive into a hive of activity as you join study groups, share
                  insights, and learn from your peers. With StudyHive, you will
                  experience the power of collective knowledge in action.
                </p>
                <div className="flex gap-4">
                  <button className="btn btn-primary font-bold px-2">
                    Discover
                  </button>
                  <button className="btn btn-secondary font-bold px-2">
                    Latest Info
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform gap-3 bottom-5 right-5">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
