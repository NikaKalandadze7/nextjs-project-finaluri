import { CategoriesInterface } from "@/types";
import Link from "next/link";

import React from "react";

const CategoryButton: React.FC<CategoriesInterface> = ({
  id,
  name,
}: CategoriesInterface) => {
  return (
    <li className="text-black font-semibold w-full">
      <Link
        href={{
          pathname: `/categories`,
          query: { name },
        }}
      >
        {name}
      </Link>
    </li>
  );
};

export default CategoryButton;
