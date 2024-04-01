"use client";
import React, { useEffect, useState } from "react";
import { CartItemLarge, ShoppingCartIcon } from "@Components";
import { useShoppingCartStore } from "@/store";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
const CartDisplay = () => {
  const { shoppingCart, totalItemCount, totalPrice, fetchCartItems } =
    useShoppingCartStore();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);
  const t = useTranslations("ShoppingCart");
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;

  return (
    <div className="w-full flex flex-col gap-6 my-11">
      {shoppingCart.map((cartItem) => (
        <CartItemLarge
          key={cartItem.cartProduct.id}
          id={cartItem.cartProduct.id}
          image={cartItem.cartProduct.image}
          title={cartItem.cartProduct.title}
          salePrice={cartItem.cartProduct.salePrice}
          price={cartItem.cartProduct.price}
          count={cartItem.count}
          cartItemId={cartItem.id}
          category_name={cartItem.cartProduct.category_name}
          description={cartItem.cartProduct.description}
        />
      ))}
      <div className="flex flex-row justify-between flex-wrap items-center zero:gap-2 md:gap-0">
        <span className="zero:text-base md:text-xl text-secondary">
          {t("itemCount")}:
          <span className="text-2xl m-2 text-red-900">{totalItemCount}</span>
        </span>
        <span className="zero:text-base md:text-xl text-secondary">
          {t("totalPrice")}:
          <span className="text-2xl m-2 text-red-900">{totalPrice}</span>
        </span>
        <Link
          href={localizedPath("/cart/checkout")}
          className="btn  btn-error  text-primary"
        >
          {t("proceed")}
        </Link>
      </div>
    </div>
  );
};

export default CartDisplay;
