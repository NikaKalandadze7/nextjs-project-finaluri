"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HeartIcon } from "..";
import { useParams } from "next/navigation";
const WishlistButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;
  return (
    <Link href={localizedPath("/wishlist")}>
      <HeartIcon color={isHovered ? "red" : "#5F5F5F"} height={28} width={28} />
    </Link>
  );
};

export default WishlistButton;
