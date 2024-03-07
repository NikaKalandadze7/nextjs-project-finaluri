"use client";
import React, { useEffect, useState } from "react";
import ProductCardFeatured from "../ProductCardFeatured/ProductCardFeatured";
import { productService } from "@Services";
import { ProductInterface } from "@/types";
import ProductSliderLarge from "../ProductSliderLarge/ProductSliderLarge";
const FeaturedProducts = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  useEffect(() => {
    const params = {
      onlySales: true,
    };
    productService(params)
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    productService(params);
  }, []);

  return (
    <div className="mt-10 flex w-full flex-row  overflow-hidden">
      <ProductSliderLarge items={products} />
    </div>
  );
};

export default FeaturedProducts;
