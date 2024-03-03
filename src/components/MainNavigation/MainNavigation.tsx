import Link from "next/link";
import React from "react";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";

const MainNavigation = () => {
  return (
    <ul className="flex flex-row gap-12">
      <li className="text-black text-base drop-shadow-lg font-semibold hover-underline-animation">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="text-black text-base drop-shadow-lg font-semibold hover-underline-animation">
        <Link href="/products">Products</Link>
      </li>

      <li className="text-black z-[999] text-base drop-shadow-lg font-semibold hover-underline-animation dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="z-[999]">
          Categories
        </div>
        <div
          tabIndex={0}
          className="dropdown-content z-[999] menu p-2 shadow bg-white  rounded-box w-52"
        >
          <CategoryDropdown />
        </div>
      </li>
      <li className="text-black text-base drop-shadow-lg font-semibold hover-underline-animation">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MainNavigation;
