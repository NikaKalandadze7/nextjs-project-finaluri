"use client";
import React, { useEffect } from "react";
import { addToCartService } from "@/services";
import { useShoppingCartStore } from "@/store";

interface AddToCartButtonProps {
  isHovered: boolean;
  id: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ isHovered, id }) => {
  const { fetchCartItems } = useShoppingCartStore();

  const addToCart = async (productId: string) => {
    try {
      await addToCartService({ id });
      await fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      className={`hover:bg-gray-700 w-full text-base bg-black text-white h-10 absolute transition-all duration-300 ${
        isHovered ? "bottom-0" : "-bottom-10"
      }`}
      onClick={() => addToCart(id)}
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
