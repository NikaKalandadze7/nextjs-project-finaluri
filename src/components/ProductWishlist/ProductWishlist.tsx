"use client";
import { useWishlistStore } from "@/store";
import React, { useEffect } from "react";
import ProductInWishlist from "../ProductInWishlist/ProductInWishlist";

const ProductWishlist = () => {
  const { wishlist, fetchWishlist } = useWishlistStore();
  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);
  return (
    <div>
      <div className="mt-10  flex w-full flex-row flex-wrap gap-5">
        {Array.isArray(wishlist) && wishlist.length > 0 ? (
          wishlist.map((product) => (
            <ProductInWishlist
              key={product.id}
              id={product.id}
              title={product.likedProduct.title}
              price={product.likedProduct.price}
              image={product.likedProduct.image}
              category_name={product.likedProduct.category_name}
              description={product.likedProduct.description}
              salePrice={product.likedProduct.salePrice}
            />
          ))
        ) : (
          <p>No Wishlisted Products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductWishlist;
