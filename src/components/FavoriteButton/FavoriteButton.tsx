"use client";
import React, { useEffect, useState } from "react";
import { HeartIcon } from "..";
import addToWishlistService from "@/services/addToWishlistService";
import { useWishlistStore } from "@/store";
import { removeFromWishlistService } from "@/services";

interface FavoriteButtonProps {
  productId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ productId }) => {
  const { wishlist, fetchWishlist } = useWishlistStore();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const productExists = wishlist.some(
      (item) => item.product_id === productId
    );
    setIsFavorite(productExists);
  }, [wishlist, productId]);

  const toggleWishlist = async () => {
    if (isFavorite) {
      try {
        const wishlistItem = wishlist.find(
          (item) => item.product_id === productId
        );
        if (wishlistItem) {
          await removeFromWishlistService({ productId: wishlistItem.id });
          await fetchWishlist();
        }
      } catch (error) {
        console.error("Failed to remove from wishlist:", error);
      }
    } else {
      try {
        await addToWishlistService({ id: productId });
        await fetchWishlist();
      } catch (error) {
        console.error("Failed to add to wishlist:", error);
      }
    }
  };

  return (
    <button
      className={`${
        isFavorite ? "bg-red-600" : "bg-white"
      } rounded-[50%] p-2 h-9 w-9 flex justify-center items-center border-1 border-[#E9E9E9] border-solid hover:border-red-500 ease-in-out duration-300 hover:bg-red-300  `}
      onClick={toggleWishlist}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <HeartIcon
        width={"24px"}
        height={"24px"}
        color={isFavorite ? "white" : "#5F5F5F"}
      />
    </button>
  );
};

export default FavoriteButton;
