"use client";
import React, { useEffect, useState } from "react";
import { categoriesService, productService } from "@Services";
import { CategoriesInterface, ProductInterface } from "@/types";
import { ProductCardLarge } from "@Components";
import { useTranslations } from "next-intl";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [minPrice, setMinPrice] = useState<number | string>("0");
  const [maxPrice, setMaxPrice] = useState<number | string>("9999");
  const [isOnSale, setIsOnSale] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number | string>(16);
  const [page, setPage] = useState<number>(1);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [categoryData, setCategoryData] = useState<CategoriesInterface[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const t = useTranslations("Product");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          minPrice: Number(minPrice),
          maxPrice: Number(maxPrice),
          onlySales: isOnSale,
          categoryName: categoryFilter,
          pageSize: Number(pageSize),
          page: page,
        };
        const data: ProductInterface[] = await productService(params);
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / Number(pageSize)));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const fetchCategories = async () => {
      try {
        const categories: CategoriesInterface[] = await categoriesService();
        setCategoryData(categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
    fetchData();
  }, [minPrice, maxPrice, isOnSale, categoryFilter, page, pageSize]);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-between">
        <h1 className="text-4xl text-secondary font-bold my-6">
          {t("browse")}{" "}
        </h1>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-1">
            <h6 className="text-xs text-secondary">{t("filterBySale")} </h6>
            <div className="form-control flex flex-row items-center gap-1">
              <label className="cursor-pointer label ">
                <input
                  type="checkbox"
                  checked={isOnSale}
                  onChange={(e) => setIsOnSale(e.target.checked)}
                  className="checkbox checkbox-error checkbox-sm"
                />
              </label>
              <span className="label-text text-secondary">{t("onSale")} </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-xs text-secondary">{t("filterByPrice")}</h6>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Min Price"
                className="input input-bordered input-xs input-error w-full bg-primary max-w-[80px]"
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <span>-</span>
              <input
                type="text"
                placeholder="Max Price"
                className="input input-bordered input-xs input-error w-full bg-primary max-w-[80px]"
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h6 className="text-xs text-secondary">{t("filterByCategory")}</h6>
            <div>
              <select
                className="select select-error select-xs  bg-primary text-secondary"
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option disabled selected>
                  {t("chooseCategory")}
                </option>
                {categoryData.map((categories) => (
                  <option key={categories.id}>{categories.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="text-xs text-secondary">{t("resultQuantity")}</h6>
            <div>
              <select
                className="select select-error select-xs  bg-primary text-secondary"
                onChange={(e) => setPageSize(e.target.value)}
              >
                <option disabled selected>
                  {t("quantity")}
                </option>
                <option>4</option>
                <option>8</option>
                <option>16</option>
                <option>32</option>
                <option>64</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10  flex w-full flex-row flex-wrap gap-5">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <ProductCardLarge
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                category_name={product.category_name}
                description={product.description}
                salePrice={product.salePrice}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
        <div className="join m-12 bg-primary">
          {Array.from(Array(totalPages).keys()).map((pageNumber) => (
            <button
              key={pageNumber}
              className={`join-item btn btn-sm ${
                page === pageNumber + 1 ? "btn-active" : ""
              } bg-primary`}
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              {pageNumber + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
