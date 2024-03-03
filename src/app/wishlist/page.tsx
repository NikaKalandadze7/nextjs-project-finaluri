import { ProductWishlist } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="container flex min-h-screen flex-col items-center m-auto ">
      <div className="w-full">
        <ProductWishlist />
      </div>
    </div>
  );
};

export default page;
