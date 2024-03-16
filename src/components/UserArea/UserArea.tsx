import React from "react";
import { ShoppingCart, UserMenu, WishlistButton } from "@Components";

const UserArea = () => {
  return (
    <div className="flex flex-row justify-center items-center  zero:gap-2 md:gap-4 lg:gap-6 relative">
      <WishlistButton />
      <ShoppingCart />
      <UserMenu />
    </div>
  );
};

export default UserArea;
