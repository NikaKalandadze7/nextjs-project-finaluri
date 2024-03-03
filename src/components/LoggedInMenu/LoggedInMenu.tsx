"use client";
import React from "react";
import {
  useIsLoggedInStore,
  useUserInfoStore,
  useShoppingCartStore,
  useWishlistStore,
} from "@/store";
import { LogOutIcon, ManageDataIcon, OrdersIcon, UserIcon } from "..";
import Link from "next/link";

const LoggedInMenu = () => {
  const { setLoggedIn } = useIsLoggedInStore();
  const { setUserInfo } = useUserInfoStore();
  const { clearCart } = useShoppingCartStore();
  const { clearWishlist } = useWishlistStore();

  const handleLogOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setUserInfo(null);
    clearCart();
    clearWishlist();
  };

  return (
    <>
      <li>
        <Link href={"/account"} className="flex flex-row items-center gap-3">
          <UserIcon color="white" height={18} width={18} />
          <span>Manage My Account</span>
        </Link>
      </li>
      <li>
        <Link
          href={"/account/orders"}
          className="flex flex-row items-center gap-3"
        >
          <OrdersIcon color="white" height={18} width={18} />
          <span>My Orders</span>
        </Link>
      </li>
      <li>
        <Link href={"/admin"} className="flex flex-row items-center gap-3">
          <ManageDataIcon color="white" height={18} width={18} />
          <span>Manage Products</span>
        </Link>
      </li>
      <li>
        <button
          className="flex flex-row items-center gap-3"
          onClick={() => handleLogOut()}
        >
          <LogOutIcon color="white" height={18} width={18} />
          <span>Log Out</span>
        </button>
      </li>
    </>
  );
};

export default LoggedInMenu;
