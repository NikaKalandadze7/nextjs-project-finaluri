import {
  CategoryNavigation,
  FeaturedProducts,
  ProductsDisplay,
} from "@/components";
import React from "react";

const page = () => {
  return (
    <main className="container px-[2px] flex min-h-screen flex-col items-center m-auto ">
      <div className="flex flex-row w-full gap-6">
        <CategoryNavigation />
        <FeaturedProducts />
      </div>
      <ProductsDisplay />
    </main>
  );
};

export default page;
