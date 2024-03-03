"use client";
import { useWishlistStore } from "@/store";
import React, { useState } from "react";
import { TrashIcon } from "..";
import { removeFromWishlistService } from "@/services";
interface RemoveFromWishlistButtonProps {
  productId: string | undefined;
}

const RemoveFromWishlistButton: React.FC<RemoveFromWishlistButtonProps> = ({
  productId,
}) => {
  const { wishlist, fetchWishlist } = useWishlistStore();
  const [isHovered, setIsHovered] = useState(false);

  const removeFromWishlist = async () => {
    try {
      const wishlistItem = wishlist.find((item) => item.id === productId);
      if (wishlistItem) {
        await removeFromWishlistService({ productId: wishlistItem.id });
        await fetchWishlist();
      }
    } catch (error) {
      console.error("Failed to remove from wishlist:", error);
    }
  };
  return (
    <button
      className={`rounded-[50%] p-2 h-9 w-9 flex justify-center items-center border-1 border-[#E9E9E9] border-solid hover:border-red-500 ease-in-out duration-300 
        "bg-white" ${isHovered ? "bg-red-300" : "bg-white"}`}
      onClick={() => removeFromWishlist()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TrashIcon width={"24px"} height={"24px"} color={"black"} />
    </button>
  );
};

export default RemoveFromWishlistButton;
