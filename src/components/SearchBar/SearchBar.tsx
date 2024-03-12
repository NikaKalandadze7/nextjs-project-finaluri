"use client";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon, ProductSearchDisplay } from "..";
import { ProductInterface, fetchedProductsInterface } from "@/types";
import { productService } from "@/services";
import { useTranslations } from "next-intl";

const SearchBar = () => {
  const [focused, setFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>(
    []
  );

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      if (!searchText.trim()) {
        setFilteredProducts([]);
        return;
      }

      try {
        const data = await productService({ productName: searchText });
        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchFilteredProducts();
  }, [searchText]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const t = useTranslations("Search");
  return (
    <div className="relative flex items-center justify-center pl-2 h-9 rounded-sm drop-shadow-md w-60 z-[9999]">
      <input
        type="text"
        placeholder={t("placeholder")}
        className="text-xs h-9 bg-stone-300 py-2 px-5 rounded-sm w-full z-[9999]"
        onChange={handleSearchChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <div
        className={`h-486 max-h-screen pt-1 bg-primary border-l-[1px] border-r-[1px] border-b-[1px] border-solid border-[#c7c7c7] overflow-auto absolute top-[40px] w-[calc(100%-10px)] z-[9998] ${
          focused && searchText.length > 0 ? "block" : "hidden"
        } `}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductSearchDisplay
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
              category={product.category_name}
            />
          ))
        ) : (
          <p className="px-4">{t("notFound")}</p>
        )}
      </div>
      <button className="absolute right-3 z-[9999]">
        <MagnifyingGlassIcon color="gray" height={22} width={22} />
      </button>
    </div>
  );
};

export default SearchBar;
