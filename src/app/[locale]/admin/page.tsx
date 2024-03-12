"use client";
import { AddCategory, AddProduct, NotLoggedIn } from "@/components";
import { useIsLoggedInStore } from "@/store";
import React from "react";
import { useTranslations } from "next-intl";

const Page = () => {
  const { loggedIn } = useIsLoggedInStore();
  const t = useTranslations("AddProductsAndCategories");

  return (
    <div className="container flex min-h-screen flex-col items-center m-auto ">
      <div className="flex flex-col w-full items-center pt-20">
        {loggedIn ? (
          <div className="flex flex-col gap-5 w-[50%] ">
            <div className="collapse collapse-arrow">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="flex flex-row justify-between text-accent collapse-title ">
                <h1 className="text-secondary font-bold text-2xl">
                  {t("addNewProduct")}
                </h1>
              </div>
              <div className="collapse-content">
                <AddProduct />
              </div>
            </div>
            <div className="collapse collapse-arrow  ">
              <input type="radio" name="my-accordion-2" />
              <div className="flex flex-row justify-between text-accent collapse-title">
                <h1 className="text-secondary font-bold text-2xl">
                  {t("addNewCategory")}
                </h1>
              </div>
              <div className="collapse-content flex flex-col gap-5">
                <AddCategory />
              </div>
            </div>
          </div>
        ) : (
          <NotLoggedIn />
        )}
      </div>
    </div>
  );
};

export default Page;
