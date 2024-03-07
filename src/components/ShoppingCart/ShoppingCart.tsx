"use client";
import React, { useEffect, useState } from "react";
import { CartDropdownItemDisplay, ShoppingCartIcon } from "@Components";
import { useShoppingCartStore } from "@/store";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
const ShoppingCart = () => {
  const { shoppingCart, fetchCartItems } = useShoppingCartStore();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;
  const getTotalItemCount = (shoppingCart: any) => {
    return shoppingCart.reduce(
      (total: number, product: any) => total + product.count,
      0
    );
  };
  const t = useTranslations("ShoppingCart");
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="relative">
        <ShoppingCartIcon color={"black"} height={28} width={28} />
        <span className="absolute xl:left-4 xl:-top-2 lg:left-5 lg:-top-5 md:left-5 md:-top-2 xs:left-4 xs:-top-2 rounded-[50%] h-5 w-5 bg-[#ef4c53] text-white text-center text-xs flex justify-center items-center ">
          {getTotalItemCount(shoppingCart)}
        </span>
      </div>
      <ul
        tabIndex={0}
        style={{
          backgroundImage:
            "linear-gradient(to right top, #5e007f, #6e2889, #7c4292, #8a5a9c, #9872a5, #916f97, #896c8a, #806a7e, #614f5b, #42353c, #241e20, #000000)",
        }}
        className="dropdown-content z-[9] menu w-96 max-w-sm bg-black text-white flex flex-col text-sm gap-3 font-semibold rounded-md"
      >
        <div className="flex flex-row justify-between w-full p-1">
          <div className="flex flex-row gap-2">
            <h5>{t("productName")}</h5>
          </div>
          <div className="flex flex-row gap-6">
            <span>{t("quantity")}</span>
            <span className="text-xs text-[#ef4c53] w-6">{t("price")}</span>
            <span className="text-xs  w-9 m-1">{t("remove")}</span>
          </div>
        </div>
        {shoppingCart.map((cartItem) => (
          <CartDropdownItemDisplay
            key={cartItem.cartProduct.id}
            id={cartItem.cartProduct.id}
            image={cartItem.cartProduct.image}
            title={cartItem.cartProduct.title}
            salePrice={cartItem.cartProduct.salePrice}
            price={cartItem.cartProduct.price}
            count={cartItem.count}
            cartItemId={cartItem.id}
          />
        ))}
        <div className="flex flex-row justify-between">
          <Link
            href={localizedPath("/cart")}
            className="btn btn-outline btn-error btn-sm"
          >
            {t("cart")}
          </Link>
          <Link
            href={localizedPath("/cart/checkout")}
            className="btn  btn-error btn-sm text-white"
          >
            {t("proceed")}
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default ShoppingCart;
