import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  MainNavigation,
  SearchBar,
  ThemeSwitcher,
  UserArea,
  WebsiteLogo,
} from "@Components";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <div className="bg-primary">
      <div className=" border-gray-300 border-b-[1px]  ">
        <div className="bg-secondary text-primary   justify-center items-center h-12  zero:hidden md:flex">
          <div className="flex flex-row items-center gap-2 ">
            <h4 className="text-sm font-light ">{t("announcement")}</h4>
            <Link className="font-semibold underline" href={"/products"}>
              {t("shop")}
            </Link>
          </div>
        </div>
        <header className="container mx-auto p-4 flex flex-col md:mt-6  gap-8">
          <div className="flex justify-between items-center h-10">
            <WebsiteLogo />
            <div className="zero:hidden md:block">
              <MainNavigation />
            </div>
            <SearchBar />
            <ThemeSwitcher />
            <div className="md:flex gap-2 zero:hidden">
              <UserArea />
            </div>
          </div>
          <div className="zero:flex justify-between items-center md:hidden">
            <MainNavigation />
            <UserArea />
          </div>
        </header>
      </div>
      <div className="margin-auto container px-[10px] ">
        <Breadcrumb
          homeElement={"Home"}
          activeClasses="text-accent"
          containerClasses="text-sm breadcrumbs "
          listClasses="hover:underline mx-2 font-bold"
          capitalizeLinks
        />
      </div>
    </div>
  );
};

export default Header;
