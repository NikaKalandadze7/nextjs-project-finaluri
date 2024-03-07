"use client";
import React, { useEffect, useState } from "react";
import { CartItemLarge, ShoppingCartIcon } from "@Components";
import { useShoppingCartStore } from "@/store";
import Link from "next/link";
import { useTranslations } from "next-intl";
const CartDisplay = () => {
  const { shoppingCart, totalItemCount, totalPrice, fetchCartItems } =
    useShoppingCartStore();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);
  const t = useTranslations("ShoppingCart");

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
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl text-black">
          {t("itemCount")}:
          <span className="text-2xl m-2 text-red-900">{totalItemCount}</span>
        </span>
        <span className="text-xl text-black">
          {t("totalPrice")}:
          <span className="text-2xl m-2 text-red-900">{totalPrice}</span>
        </span>
        <Link href={"/cart/checkout"} className="btn  btn-error  text-white">
          {t("proceed")}
        </Link>
      </div>
    </div>
  );
};

export default CartDisplay;
