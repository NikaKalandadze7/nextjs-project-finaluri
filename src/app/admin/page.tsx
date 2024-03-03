"use client";
import { AddCategory, AddProduct, NotLoggedIn } from "@/components";
import { useIsLoggedInStore } from "@/store";
import React from "react";

const page = () => {
  const { loggedIn } = useIsLoggedInStore();
  return (
    <div className="container flex min-h-screen flex-col items-center m-auto ">
      <div className="flex flex-col w-full items-center pt-20">
        {loggedIn ? (
          <div className="flex flex-col gap-5 w-[50%] ">
            <div className="collapse collapse-arrow">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="flex flex-row justify-between text-[#ef4c53] collapse-title ">
                <h1 className="text-black font-bold text-2xl">
                  Add New Product
                </h1>
              </div>
              <div className="collapse-content">
                <AddProduct />
              </div>
            </div>
            <div className="collapse collapse-arrow  ">
              <input type="radio" name="my-accordion-2" />
              <div className="flex flex-row justify-between text-[#ef4c53] collapse-title">
                <h1 className="text-black font-bold text-2xl">
                  Add New Category
                </h1>
              </div>
              <div className="collapse-content flex flex-col gap-5">
                <AddCategory />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <NotLoggedIn />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
