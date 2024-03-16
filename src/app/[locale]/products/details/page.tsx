"use client";
import React, { useEffect, useState } from "react";
import { productService } from "@Services";
import Image from "next/image";
import Link from "next/link";
import {
  AddToCartButton,
  DeliveryIcon,
  FavoriteButton,
  ProductSlider,
  ReturnIcon,
} from "@/components";
import { ProductInterface } from "@/types";

const page = ({
  searchParams,
}: {
  searchParams: {
    id: string;
    pageSize: 99999;
  };
}) => {
  const [currentProduct, setCurrentProduct] = useState<ProductInterface>({
    searchParams,
  });
  const [recommendedProducts, setRecommendedProducts] = useState<
    ProductInterface[]
  >([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService({ pageSize: 9999 });
        console.log(222222, data.products);
        const specificProduct = data.products.find(function (item: any) {
          return item.id === searchParams.id;
        });
        setCurrentProduct(specificProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchProductsByCategory = async () => {
      try {
        const data = await productService({
          categoryName: currentProduct?.category_name,
        });
        setRecommendedProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
    fetchProductsByCategory();
  }, [searchParams.id]);

  const discountPercentage = Math.round(
    ((currentProduct?.price - currentProduct?.salePrice) /
      currentProduct?.price) *
      100
  );
  return (
    <div className="container flex min-h-screen flex-col items-center m-auto ">
      <div className="flex flex-col w-full items-center pt-20 gap-12 text-secondary">
        <div className="flex zero:flex-col md:flex-row gap-16 w-full">
          <div className="zero:w-full md:w-[50%] relative">
            <Image
              height={700}
              width={700}
              alt={currentProduct?.title}
              src={currentProduct?.image}
            />
            <div
              className={`${
                currentProduct?.salePrice === null ? "hidden" : "absolute"
              } bg-[#ef4c53] rounded-md md:top-2 md:left-2 xs:left-1 xs:top-1 px-3 py-1 text-primary text-sm`}
            >
              -{discountPercentage}%
            </div>
          </div>
          <div className="flex flex-col gap-6 zero:w-full md:w-[50%]">
            <div className="flex flex-row justify-between">
              <h2 className="font-semibold text-2xl text-secondary">
                {currentProduct?.title}
              </h2>
              <FavoriteButton productId={searchParams.id} />
            </div>
            <span className="badge badge-primary badge-outline">
              {currentProduct?.category_name}
            </span>
            <div className="flex flex-row justify-between pt-4 md:m-1 xs:m-3 ">
              <span className="text-secondary font-normal text-xl">
                $
                {currentProduct?.salePrice === null
                  ? currentProduct?.price
                  : currentProduct?.salePrice}
                <span
                  className={`line-through text-base text-secondary pl-1 font-light ${
                    currentProduct?.salePrice === null ? "hidden" : "inline"
                  }`}
                >
                  ${currentProduct?.price}
                </span>
              </span>
            </div>
            <div className="text-secondary text-base border-b-[1px] border-gray-300  border-t-[1px] py-6">
              {currentProduct?.description}
            </div>
            <div className="flex flex-col w-[100%] gap-6 border-b-[1px] py-6 border-gray-300">
              <div className="w-[40%] relative h-4">
                <AddToCartButton isHovered={true} id={searchParams.id} />
              </div>
              <Link
                href="/checkout"
                className="w-[40%] btn btn-outline btn-error  right-0"
              >
                Buy Now
              </Link>
            </div>
            <div className="flex flex-col mt-6 border-[1px] border-gray-300 zero:w-full xl:w-[50%]  rounded-[1px] p-6">
              <div className="flex flex-row justify-center items-center gap-6 p-4">
                <div className="w-10 h-10">
                  <DeliveryIcon height={32} width={32} color="secondary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-base text-secondary">Free Delivery</h5>
                  <p className="text-sm underline">
                    Enter your postal code for Delivery availability
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-6 border-gray-300  border-t-[1px] p-4">
                <div className="w-10 h-10">
                  <ReturnIcon height={32} width={32} color="secondary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-base text-secondary">Return Delivery</h5>
                  <p className="text-sm">Free 30 Days of Delivery Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-9  border-gray-300  border-t-[1px] p-6 m-6 overflow-hidden">
            <h3 className="text-[#ef4c53] text-lg font-semibold">
              Check out similar Products:
            </h3>
            <div className="mt-10 pt-10  flex w-full flex-row gap-5 ">
              <ProductSlider items={recommendedProducts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
