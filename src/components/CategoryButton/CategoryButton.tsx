import { CategoriesInterface } from "@/types";
import Link from "next/link";
import React from "react";

import { useParams } from "next/navigation";

const CategoryButton: React.FC<CategoriesInterface> = ({
  id,
  name,
}: CategoriesInterface) => {
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;

  return (
    <li className="text-black font-semibold w-full">
      <Link
        href={{
          pathname: localizedPath("/products"),
          query: { name },
        }}
      >
        {name}
      </Link>
    </li>
  );
};

export default CategoryButton;
