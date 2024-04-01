import React from "react";
import {
  ShoppingCart,
  ShoppingCartButton,
  UserMenu,
  WishlistButton,
} from "@Components";

const UserArea = () => {
  return (
    <div className="flex flex-row justify-center items-center  zero:gap-2 md:gap-4 lg:gap-6 relative">
      <WishlistButton />
      <div className="zero:hidden sm:block">
        <ShoppingCart />
      </div>
      <div className="zero:block sm:hidden">
        <ShoppingCartButton />
      </div>
      <UserMenu />
    </div>
  );
};

export default UserArea;
