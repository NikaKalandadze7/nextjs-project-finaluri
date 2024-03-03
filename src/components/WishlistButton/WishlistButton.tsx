"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HeartIcon } from "..";

const WishlistButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={"/wishlist"}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <HeartIcon color={isHovered ? "red" : "#5F5F5F"} height={28} width={28} />
    </Link>
  );
};

export default WishlistButton;
