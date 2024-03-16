import React from "react";
import { SignUp } from "@/components";
const page = () => {
  const sideImageUrl = "/sideImage.png";
  return (
    <div className="min-h-screen pt-9">
      <div className="h-[85vh]">
        <div
          className="bg-no-repeat bg-cover h-[100%] w-[900px]"
          style={{ backgroundImage: `url(${sideImageUrl})` }}
        ></div>
      </div>

      <div className="container flex flex-row  justify-end items-center mt-[-80vh] mx-auto pb-20">
        <div className="h-[65vh]">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default page;
