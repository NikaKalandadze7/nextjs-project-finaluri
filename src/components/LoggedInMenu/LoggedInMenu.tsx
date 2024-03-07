"use client";
import React from "react";
import {
  useIsLoggedInStore,
  useUserInfoStore,
  useShoppingCartStore,
  useWishlistStore,
  usePurchasesStore,
} from "@/store";
import { LogOutIcon, ManageDataIcon, OrdersIcon, UserIcon } from "..";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const LoggedInMenu = () => {
  const { setLoggedIn } = useIsLoggedInStore();
  const { setUserInfo } = useUserInfoStore();
  const { clearCart } = useShoppingCartStore();
  const { clearWishlist } = useWishlistStore();
  const { clearPurchases } = usePurchasesStore();
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;

  const handleLogOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setUserInfo(null);
    clearCart();
    clearWishlist();
    clearPurchases();
  };
  const t = useTranslations("User");

  return (
    <>
      <li>
        <Link
          href={localizedPath("/account")}
          className="flex flex-row items-center gap-3"
        >
          <UserIcon color="white" height={18} width={18} />
          <span>{t("manageAccount")}</span>
        </Link>
      </li>
      <li>
        <Link
          href={localizedPath("/account/orders")}
          className="flex flex-row items-center gap-3"
        >
          <OrdersIcon color="white" height={18} width={18} />
          <span>{t("myOrders")}</span>
        </Link>
      </li>
      <li>
        <Link
          href={localizedPath("/admin")}
          className="flex flex-row items-center gap-3"
        >
          <ManageDataIcon color="white" height={18} width={18} />
          <span>{t("manageProducts")}</span>
        </Link>
      </li>
      <li>
        <button
          className="flex flex-row items-center gap-3"
          onClick={() => handleLogOut()}
        >
          <LogOutIcon color="white" height={18} width={18} />
          <span>{t("logOut")}</span>
        </button>
      </li>
    </>
  );
};

export default LoggedInMenu;
