import React from "react";
import Image from "next/image";
import iphoneBanner from "../../../public/iphoneBanner.png";
import BannerSlider from "../BannerSlider/BannerSlider";

const MainBanner = () => {
  return (
    <div className="relative mt-10 ml-[45px] overflow-hidden w-full">
      <BannerSlider />
      {/* <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Image
            alt="banner"
            sizes="(max-width: 1200px) 70vw, (max-width: 1200px) 70vw, 70vw"
            src={iphoneBanner}
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Image
            alt="banner"
            sizes="(max-width: 1200px) 70vw, (max-width: 1200px) 70vw, 70vw"
            src={iphoneBanner}
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Image
            sizes="(max-width: 1200px) 70vw, (max-width: 1200px) 70vw, 70vw"
            alt="banner"
            src={iphoneBanner}
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <Image
            sizes="(max-width: 1200px) 70vw, (max-width: 1200px) 70vw, 70vw"
            alt="banner"
            src={iphoneBanner}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 absolute bottom-3">
        <a
          href="#item1"
          className="btn btn-xs rounded-full bg-white border-2 border-[#f5f5f5] w-6 h-6 hover:bg-gray-300"
        ></a>
        <a
          href="#item2"
          className="btn btn-xs rounded-full bg-white border-2 border-[#f5f5f5] w-6 h-6 hover:bg-gray-300"
        ></a>
        <a
          href="#item3"
          className="btn btn-xs rounded-full bg-white border-2 border-[#f5f5f5] w-6 h-6 hover:bg-gray-300"
        ></a>
        <a
          href="#item4"
          className="btn btn-xs rounded-full bg-white border-2 border-[#f5f5f5] w-6 h-6 hover:bg-gray-300"
        ></a>
      </div> */}
    </div>
  );
};

export default MainBanner;
