"use client";
import { addToCartService, removeFromCartService } from "@/services";
import { CartProductInterface, ProductInterface } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TrashIcon } from "..";
import { useShoppingCartStore } from "@/store";
import { useParams } from "next/navigation";
const CartDropdownItemDisplay: React.FC<CartProductInterface> = ({
  id,
  title,
  price,
  image,
  salePrice,
  count,
  cartItemId,
}: CartProductInterface) => {
  {
    const { fetchCartItems } = useShoppingCartStore();
    const addToCart = async (productId: string | undefined) => {
      console.log(2222, productId);
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
      <li key={id} className="flex ">
        <div className="flex flex-row justify-between w-full">
          <Link
            href={{
              pathname: localizedPath("/products/details"),
              query: { id },
            }}
            className="flex flex-row gap-2"
          >
            <Image src={image} width={28} height={28} alt={title} />
            <h6>{title}</h6>
          </Link>
          <div className="flex flex-row gap-4">
            <button
              className="rounded-[50%] border-solid border-[1px] border-black w-5 h-5 flex justify-center items-center text-center hover:text-tretiary  hover:border-tretiary ease-in-out duration-200"
              onClick={() => removeFromCart(false)}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="rounded-[50%] border-solid border-[1px] border-black w-5 h-5 flex justify-center items-center text-center hover:text-tretiary  hover:border-tretiary ease-in-out duration-200"
              onClick={() => addToCart(id)}
            >
              +
            </button>
            <span className="text-xs text-[#ef4c53] w-6">${currentPrice}</span>
            <button onClick={() => removeFromCart(true)} className="ml-3">
              <TrashIcon height={20} width={20} color={"white"}></TrashIcon>
            </button>
          </div>
        </div>
      </li>
    );
  }
};
export default CartDropdownItemDisplay;
