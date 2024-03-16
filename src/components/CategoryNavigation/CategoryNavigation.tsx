"use client";
import React, { useEffect, useState } from "react";
import { categoriesService } from "@/services";
import Link from "next/link";
import { CategoriesInterface } from "@/types";
import CategoryButton from "../CategoryButton/CategoryButton";

const CategoryNavigation: React.FC = () => {
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
    <ul className="menu bg-transparent max-w-52 min-w-48 w-full p-0  rounded-none text-secondary font-semibold border-gray-300 border-r-[1px] pt-10 zero:hidden xl:block">
      {categoryData.map((categories) => (
        <CategoryButton name={categories.name} key={categories.id} />
      ))}
    </ul>
  );
};

export default CategoryNavigation;
