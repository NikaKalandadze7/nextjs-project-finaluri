"use client";
import React from "react";
import {
  useUserInfoStore,
  useShoppingCartStore,
  useIsLoggedInStore,
} from "@/store";
import ShippingAddress from "../ShippingAddress/ShippingAddress";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const CheckoutComponent = () => {
  const { totalItemCount, totalPrice } = useShoppingCartStore();
  const { userInfo } = useUserInfoStore();
  const { loggedIn } = useIsLoggedInStore();
  const t = useTranslations("Checkout");
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;

  return (
    <div className="flex flex-col justify-center items-center w-full text-secondary gap-3">
      <h1 className=" text-xl text-secondary">
        {t("greeting")}
        <span className="text-[#ef4c53]">{` ${userInfo?.first_name} ${userInfo?.last_name}`}</span>
      </h1>
      {totalItemCount === 0 ? (
        <h4 className=" text-xl text-secondary">
          {t("noItemsInCart")}{" "}
          <Link href={localizedPath("/products")} className="text-[#ef4c53]">
            {t("productsPage")}
          </Link>
        </h4>
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex gap-2">
            {t("youHave")}
            <span className="text-blue-600 font-bold text-lg">
              {totalItemCount}
            </span>
            {t("itemsInCart")}
          </div>
          <div className="flex gap-2">
            {t("totalPrice")}
            <span className="text-red-600 font-bold text-lg">
              ${totalPrice}
            </span>
          </div>
          <h4 className=" text-xl text-secondary">
            {t("shippingAddressPrompt")}
          </h4>
          <ShippingAddress />
        </div>
      )}
    </div>
  );
};

export default CheckoutComponent;
