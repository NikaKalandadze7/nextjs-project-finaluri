import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  MainNavigation,
  SearchBar,
  ThemeSwitcher,
  UserArea,
} from "@Components";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <div className="bg-primary">
      <div className=" border-gray-300 border-b-[1px]  ">
        <div className="bg-base-100 text-primary flex justify-center items-center h-12">
          <div className="flex flex-row items-center gap-2">
            <h4 className="text-sm font-light ">{t("announcement")}</h4>
            <Link className="font-semibold underline" href={"/products"}>
              {t("shop")}
            </Link>
          </div>
          <ThemeSwitcher />
        </div>
        <header className="container mx-auto p-4 flex flex-col mt-6">
          <div className="flex justify-between items-center h-10">
            <h1 className="text-2xl text-secondary font-extrabold drop-shadow-xl">
              <Link href={"/"}>Exclusive</Link>
            </h1>
            <MainNavigation />
            <SearchBar />
            <div className="flex gap-2">
              <UserArea />
            </div>
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
