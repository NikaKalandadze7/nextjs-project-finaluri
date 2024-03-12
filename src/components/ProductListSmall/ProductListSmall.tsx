"use client";
import React, { useEffect, useState } from "react";
import { productService } from "@Services";
import ProductSlider from "../ProductSlider/ProductSlider";
import { useTranslations } from "next-intl";
import { ProductInterface } from "@/types";

const ProductListSmall = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const t = useTranslations("Product");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService({});
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="w-full">
      <div className="mt-9 border-gray-300  border-t-[1px] py-6 my-6 overflow-hidden">
        <h3 className="text-[#ef4c53] text-lg font-semibold">
          {t("moreProducts")}:
        </h3>
        <div className="mt-10 pt-10  flex w-full flex-row gap-5 ">
          <ProductSlider items={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductListSmall;
