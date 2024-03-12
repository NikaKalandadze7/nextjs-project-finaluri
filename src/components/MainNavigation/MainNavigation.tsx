"use client";
import Link from "next/link";
import React from "react";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { useTranslations } from "next-intl";

import { useParams } from "next/navigation";

const MainNavigation = () => {
  const t = useTranslations("Navigation");
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;

  return (
    <ul className="flex flex-row gap-12">
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
  );
};

export default MainNavigation;
