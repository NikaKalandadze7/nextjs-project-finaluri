"use client";
import Link from "next/link";
import React from "react";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { useTranslations } from "next-intl";

import { useParams } from "next/navigation";
import Burger from "@images/icons/Burger";

const MainNavigation = () => {
  const t = useTranslations("Navigation");
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;

  return (
    <div>
      <ul className="lg:flex-row zero:gap-4  lg:gap-12 xl:gap-8 zero:hidden xl:flex  ">
        <li className="text-secondary text-base drop-shadow-lg font-semibold hover-underline-animation">
          <Link href={"/"}>{t("home")}</Link>
        </li>
        <li className="text-secondary text-base drop-shadow-lg font-semibold hover-underline-animation">
          <Link href={localizedPath("/products")}>{t("products")}</Link>
        </li>

        <li className="text-secondary z-[999] text-base drop-shadow-lg font-semibold hover-underline-animation dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="z-[999]">
            {t("categories")}
          </div>
          <div
            tabIndex={0}
            className="dropdown-content z-[999] menu p-2 shadow bg-primary  rounded-box w-52"
          >
            <CategoryDropdown />
          </div>
        </li>
        <li className="text-secondary text-base drop-shadow-lg font-semibold hover-underline-animation">
          <Link href={localizedPath("/contact")}>{t("contact")}</Link>
        </li>
      </ul>
      <div className="dropdown dropdown-bottom md:dropdown-end zero:inline-block xl:hidden">
        <div
          tabIndex={0}
          role="button"
          className=" bg-slate-500 h-10 w-10 rounded-full flex justify-center items-center hover:bg-red-600"
        >
          <Burger width={32} height={32} color="white" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1000] menu p-2 shadow bg-primary  text-secondary rounded-box w-52"
        >
          <li className="text-secondary text-base drop-shadow-lg font-semibold hover-underline-animation">
            <Link href={"/"}>{t("home")}</Link>
          </li>
          <li className="text-secondary text-base drop-shadow-lg font-semibold hover-underline-animation">
            <Link href={localizedPath("/products")}>{t("products")}</Link>
          </li>

          <li className="text-secondary z-[999] text-base drop-shadow-lg font-semibold hover-underline-animation dropdown dropdown-hover">
            <details open={false}>
              <summary tabIndex={0} role="button" className="z-[999]">
                {t("categories")}
              </summary>
              <div
                tabIndex={0}
                className=" z-[999]  p-2 shadow bg-primary  rounded-box w-52"
              >
                <CategoryDropdown />
              </div>
            </details>
          </li>
          <li className="text-secondary text-base drop-shadow-lg font-semibold hover-underline-animation">
            <Link href={localizedPath("/contact")}>{t("contact")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNavigation;
