"use client";
import React, { useEffect } from "react";
import { ShoppingCartIcon } from "@Components";
import { useShoppingCartStore } from "@/store";
import { useParams } from "next/navigation";
import Link from "next/link";
const ShoppingCartButton = () => {
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

  return (
    <Link
      href={localizedPath("/cart")}
      tabIndex={0}
      role="button"
      className="relative bg-slate-500 h-10 w-10 rounded-full flex justify-center items-center hover:bg-red-600"
    >
      <ShoppingCartIcon color={"white"} height={28} width={28} />
      <span className="absolute  right-0  -top-3  rounded-[50%] h-5 w-5 bg-[#ef4c53] border-gray-300 border-b-[1px] text-white text-center text-xs flex justify-center items-center ">
        {getTotalItemCount(shoppingCart)}
      </span>
    </Link>
  );
};

export default ShoppingCartButton;
