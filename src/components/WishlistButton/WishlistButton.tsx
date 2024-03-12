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
    <Link
      href={localizedPath("/wishlist")}
      className="bg-accent h-10 w-10 rounded-full flex justify-center items-center hover:bg-red-600"
    >
      <HeartIcon color="white" height={28} width={28} />
    </Link>
  );
};

export default WishlistButton;
