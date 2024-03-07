"use client";
import { ProductInterface } from "@/types";
import React, { useState } from "react";
import { AddToCartButton, RemoveFromWishlistButton } from "@Components";
import Link from "next/link";
import { useParams } from "next/navigation";
const ProductInWishlist: React.FC<ProductInterface> = ({
  id,
  title,
  description,
  price,
  image,
  salePrice,
  category_name,
  productId,
}: ProductInterface) => {
  const discountPercentage = Math.round(((price - salePrice) / price) * 100);
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;
  return (
    <div className="w-[calc(25%-20px)] rounded-md bg-white text-black z-0">
      <div
        className="bg-cover bg-top max-h-[614px] pt-[90%] bg-[#f3eae3] relative overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className={`${
            salePrice === null ? "hidden" : "absolute"
          } bg-[#ef4c53] rounded-tl-md	rounded-br-md  top-0  left-0   px-3 py-1 text-white text-base`}
        >
          Product on sale!
          <span className="font-bold text-lg">-{discountPercentage}%</span>
        </div>

        <div className="absolute md:right-2 md:top-2 xs:right-1 xs:top-1 ">
          <RemoveFromWishlistButton productId={productId} />
        </div>
        <AddToCartButton isHovered={true} id={id} />
      </div>
      <div className="flex flex-col flex-nowrap">
        <h1 className="max-w-[264px] w-full max-h-16 h-full xl:text-base md:text-base sm:text-sm xs:text-[10px] font-semibold leading-6 md:mt-[20px] xs:mt-[10px] truncate">
          {title}
        </h1>
        <div className="text-[10px] font-medium leading-4 mt-2 sm:block xs:hidden">
          {category_name}
        </div>
      </div>
      <div className="flex flex-row justify-between pt-4 md:m-1 xs:m-3">
        <span className="text-[#ef4c53] font-semibold">
          ${salePrice === null ? price : salePrice}
          <span
            className={`line-through text-xs text-black pl-1 font-light ${
              salePrice === null ? "hidden" : "inline"
            }`}
          >
            ${price}
          </span>
        </span>
        <div className="">
          <Link
            href={{
              pathname: localizedPath("/products/details"),
              query: { id },
            }}
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInWishlist;
