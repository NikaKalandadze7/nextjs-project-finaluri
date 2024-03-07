import { CheckoutComponent } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="container flex min-h-screen flex-col items-center m-auto ">
      <div className="flex flex-row w-full gap-6">
        <CheckoutComponent />
      </div>
    </div>
  );
};

export default page;
