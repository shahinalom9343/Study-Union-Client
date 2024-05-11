import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-xl h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/WxTZZJs/img3.webp" className="w-full" />
        <div className="absolute flex justify-between transform gap-3 bottom-5 right-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/FqpQ3dY/img2.jpg" className="w-full" />
        <div className="absolute flex justify-between transform gap-3 bottom-5 right-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/bsLQqPX/img1.jpg" className="w-full" />
        <div className="absolute flex justify-between transform gap-3 bottom-5 right-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
