import React from "react";
import Image from "next/image";
import iphoneBanner from "../../../public/iphoneBanner.png";
import BannerSlider from "../BannerSlider/BannerSlider";

const MainBanner = () => {
  return (
    <div className="relative mt-10 ml-[45px] overflow-hidden w-full">
      <BannerSlider />
    </div>
  );
};

export default MainBanner;
