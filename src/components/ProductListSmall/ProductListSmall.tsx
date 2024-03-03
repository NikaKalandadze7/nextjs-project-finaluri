"use client";
import React, { useEffect, useState } from "react";
import { productService } from "@Services";
import ProductSlider from "../ProductSlider/ProductSlider";

const ProductListSmall = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);

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
      <div className="mt-9  border-gray-300  border-t-[1px] p-6 m-6 overflow-hidden">
        <h3 className="text-[#ef4c53] text-lg font-semibold">
          Check out more Products:
        </h3>
        <div className="mt-10 pt-10  flex w-full flex-row gap-5 ">
          <ProductSlider items={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductListSmall;
