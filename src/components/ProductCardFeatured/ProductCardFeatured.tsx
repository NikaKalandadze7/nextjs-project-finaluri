"use client";
import { ProductInterface } from "@/types";
import React, { useState } from "react";
import { AddToCartButton, FavoriteButton, MainButton } from "@Components";
import Link from "next/link";
import { useParams } from "next/navigation";
const ProductCardFeatured: React.FC<ProductInterface> = ({
  id,
  title,
  description,
  price,
  image,
  salePrice,
  category_name,
}: ProductInterface) => {
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = Math.round(((price - salePrice) / price) * 100);
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;

  return (
    <div
      className="min-w-[135px] w-[10% max-w-[267px] rounded-[2px] max-h-[340px]   overflow-hidden   ease-in-out duration-300 hover:scale-[1.02] bg-sprimary text-secondary z-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg-cover bg-top max-h-[614px]  pt-[90%] bg-[#f3eae3] relative overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className={`${
            salePrice === null ? "hidden" : "absolute"
          } bg-[#ef4c53] rounded-md md:top-2 md:left-5 xs:left-1 xs:top-1 px-3 py-1 text-white text-sm`}
        >
          -{discountPercentage}%
        </div>
        <div className="absolute  right-5  top-2 ">
          <FavoriteButton productId={id} />
        </div>
        <AddToCartButton isHovered={isHovered} id={id} />
      </div>
      <Link
        href={{
          pathname: localizedPath("/products/details"),
          query: { id },
        }}
        className="flex flex-col flex-nowrap"
      >
        <h1 className="max-w-[264px] w-full max-h-16 h-full xl:text-base md:text-base sm:text-sm xs:text-[10px] font-semibold leading-6 md:mt-[20px] xs:mt-[10px] truncate">
          {title}
        </h1>
        <div className="text-[10px] font-medium leading-4 mt-2 sm:block xs:hidden">
          {category_name}
        </div>
      </Link>
      <div className="flex flex-row justify-between p-2 md:m-1 xs:m-3">
        <span className="text-[#ef4c53] font-semibold">
          ${salePrice === null ? price : salePrice}
          <span
            className={`line-through text-xs text-secondary pl-1 font-light ${
              salePrice === null ? "hidden" : "inline"
            }`}
          >
            ${price}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProductCardFeatured;
