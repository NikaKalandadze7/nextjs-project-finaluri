import { CartDisplay } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="container flex min-h-screen flex-col items-center m-auto ">
      <div className="flex flex-row w-full gap-6">
        <CartDisplay />
      </div>
    </div>
  );
};

export default page;
