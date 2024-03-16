"use client";
import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import iphoneBanner from "../../../public/iphoneBanner.png";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 1,
    autoplay: true,
  },
  600: {
    items: 1,
    autoplay: true,
  },
  1000: {
    items: 1,
    autoplay: true,
  },
};

const BannerSlider: React.FC = () => {
  return (
    <OwlCarousel responsive={Responsive}>
      <div className=" item w-full">
        <Image
          alt="banner"
          sizes="(max-width: 1400px) 100vw, (max-width: 1400px) 100vw, 100vw"
          src={iphoneBanner}
          className="w-full"
        />
      </div>
      <div className=" item w-full">
        <Image
          alt="banner"
          sizes="(max-width: 1400px) 100vw, (max-width: 1400px) 100vw, 100vw"
          src={iphoneBanner}
          className="w-full"
        />
      </div>
      <div className=" item w-full">
        <Image
          alt="banner"
          sizes="(max-width: 1400px) 100vw, (max-width: 1400px) 100vw, 100vw"
          src={iphoneBanner}
          className="w-full"
        />
      </div>
      <div className=" item w-full">
        <Image
          alt="banner"
          sizes="(max-width: 1200px) 100vw, (max-width: 1200px) 100vw, 100vw"
          src={iphoneBanner}
          className="w-full"
        />
      </div>
    </OwlCarousel>
  );
};

export default BannerSlider;
