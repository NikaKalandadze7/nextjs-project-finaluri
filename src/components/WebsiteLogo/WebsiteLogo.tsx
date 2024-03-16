"use client";
import Link from "next/link";
import React from "react";
import { useParams } from "next/navigation";

const WebsiteLogo = () => {
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;
  return (
    <h1 className="text-2xl text-secondary font-extrabold drop-shadow-xl">
      <Link href={localizedPath("/")}>Exclusive</Link>
    </h1>
  );
};

export default WebsiteLogo;
