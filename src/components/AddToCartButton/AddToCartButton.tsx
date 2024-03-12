"use client";
import React, { useEffect } from "react";
import { addToCartService } from "@/services";
import { useShoppingCartStore } from "@/store";
import { useTranslations } from "next-intl";
interface AddToCartButtonProps {
  isHovered: boolean;
  id: string;
  label: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ isHovered, id }) => {
  const { fetchCartItems } = useShoppingCartStore();
  const t = useTranslations("Product");

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
      className={`hover:bg-gray-700 w-full text-base bg-secondary text-primary h-10 absolute transition-all duration-300 ${
        isHovered ? "bottom-0" : "-bottom-10"
      }`}
      onClick={() => addToCart(id)}
    >
      {t("addToCart")}
    </button>
  );
};

export default AddToCartButton;
