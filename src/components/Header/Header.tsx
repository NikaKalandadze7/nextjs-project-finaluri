import React from "react";
import Link from "next/link";
import { MainNavigation, SearchBar, UserArea } from "@Components";

const Header = () => {
  return (
    <div className=" border-gray-300 border-b-[1px] ">
      <div className="bg-black text-white flex justify-center items-center h-12">
        <div className="flex flex-row items-center gap-2">
          <h4 className="text-sm font-light ">
            Summer Sale For Select products And Free Express Delivery - OFF 50%!
          </h4>
          <Link className="font-semibold underline" href={"/products"}>
            ShopNow!
          </Link>
        </div>
      </div>
      <header className="container mx-auto p-4 flex flex-col mt-6">
        <div className="flex justify-between items-center h-10">
          <h1 className="text-2xl text-black font-extrabold drop-shadow-xl">
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
  );
};

export default Header;
