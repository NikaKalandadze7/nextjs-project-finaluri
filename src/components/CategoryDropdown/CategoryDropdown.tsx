"use client";
import React, { useEffect, useState } from "react";
import { categoriesService } from "@/services";

import { CategoriesInterface } from "@/types";
import CategoryButton from "../CategoryButton/CategoryButton";

const CategoryDropdown: React.FC = () => {
  const [categoryData, setCategoryData] = useState<CategoriesInterface[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories: CategoriesInterface[] = await categoriesService();
        setCategoryData(categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <ul className="menu max-w-52 min-w-48 w-full p-0  rounded-none text-black font-semibold ">
      {categoryData.map((categories) => (
        <CategoryButton name={categories.name} key={categories.id} />
      ))}
    </ul>
  );
};

export default CategoryDropdown;
