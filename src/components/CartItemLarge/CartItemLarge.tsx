"use client";
import { addToCartService, removeFromCartService } from "@/services";
import { CartProductInterface, ProductInterface } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TrashIcon } from "..";
import { useShoppingCartStore } from "@/store";
import { useParams } from "next/navigation";

const CartItemLarge: React.FC<CartProductInterface> = ({
  id,
  title,
  price,
  image,
  salePrice,
  count,
  cartItemId,
  category_name,
  description,
}: CartProductInterface) => {
  const { fetchCartItems } = useShoppingCartStore();
  const addToCart = async (productId: string | undefined) => {
    try {
      await addToCartService({ id: id });
      await fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };
  const removeFromCart = async (removeAll: boolean) => {
    try {
      await removeFromCartService({ id: cartItemId, removeAll });
      await fetchCartItems();
    } catch (error) {
      alert("Failed to remove item.");
    }
  };
  const singleUnitPrice = salePrice ? salePrice : price;

  const currentPrice = singleUnitPrice * count;
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;
  return (
    <li key={id} className="flex w-full">
      <div className="flex flex-row justify-between  items-center w-full text-black">
        <Link
          href={{
            pathname: localizedPath("/products/details"),
            query: { id },
          }}
          className="flex flex-row justify-between items-center gap-12 w-[60%]"
        >
          <Image
            src={image}
            width={120}
            height={120}
            alt={title}
            className="bg-[#f3eae3]"
          />
          <h6 className="text-black font-semibold text-xl">{title}</h6>
          <span className="badge badge-primary badge-outline text-xs">
            {category_name}
          </span>
          <p>{description}</p>
        </Link>
        <div className="flex flex-row items-center gap-12 ">
          <button
            className="hover:bg-red-100 rounded-[50%] border-solid border-[1px] border-black w-5 h-5 flex justify-center items-center text-center hover:text-tretiary  hover:border-tretiary ease-in-out duration-200"
            onClick={() => removeFromCart(false)}
          >
            -
          </button>
          <span className="text-lg">{count}</span>
          <button
            className="hover:bg-blue-100 rounded-[50%] border-solid border-[1px] border-black w-5 h-5 flex justify-center items-center text-center hover:text-tretiary  hover:border-tretiary ease-in-out duration-200"
            onClick={() => addToCart(id)}
          >
            +
          </button>
          <span className="text-lg text-[#ef4c53] w-16">${currentPrice}</span>
          <button
            onClick={() => removeFromCart(true)}
            className="ml-3 hover:bg-red-300 h-12 w-12 rounded-[50%] flex items-center justify-center"
          >
            <TrashIcon height={38} width={38} color={"black"}></TrashIcon>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItemLarge;
