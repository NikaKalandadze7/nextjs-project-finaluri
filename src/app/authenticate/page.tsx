import React from "react";
import { Login } from "@/components";
const page = () => {
  const sideImageUrl = "/sideImage.png";
  return (
    <div className="min-h-screen mt-9">
      <div className="h-[85vh]">
        <div
          className="bg-no-repeat bg-cover h-[100%] w-[900px]"
          style={{ backgroundImage: `url(${sideImageUrl})` }}
        ></div>
      </div>

      <div className="container flex flex-row  justify-end items-center mt-[-65vh] mx-auto">
        <div className="h-[65vh]">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default page;
