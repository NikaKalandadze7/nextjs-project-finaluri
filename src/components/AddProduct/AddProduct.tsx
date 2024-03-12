"use client";
import React, { useEffect, useState } from "react";
import LabeledInput from "../LabeledInput/LabeledInput";
import MainButton from "../MainButton/MainButton";
import { addProductService, categoriesService } from "@/services";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import { CategoriesInterface } from "@/types";
import { useTranslations } from "next-intl";
const AddProduct = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number | string>("");
  const [image, setImage] = useState<string>("");
  const [salePrice, setSalePrice] = useState<string | null>(null);
  const [onSale, setOnSale] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<CategoriesInterface[]>([]);
  const t = useTranslations("AddProductsAndCategories");
  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  const addProduct = async () => {
    try {
      const response = await addProductService({
        title,
        category_name: category,
        description,
        image,
        salePrice: Number(salePrice),
        price: Number(price),
      });
      console.log(response);
    } catch (error) {
      if (!title || !category || !description || !price || !image) {
        setErrorMessage(t("fillInAllFields"));
      } else {
        setErrorMessage(t("unableToAddProduct"));
      }
      setErrorOpen(true);
    }
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories: CategoriesInterface[] = await categoriesService();
        setCategoryData(categories);
      } catch (error) {
        console.error(t("failedToFetchCategories"), error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <LabeledInput
        label={t("productTitle")}
        type="text"
        value={title}
        maxLength={99}
        disabled={false}
        handleChange={(e) => setTitle(e)}
      />

      <LabeledInput
        label={t("productDescription")}
        type="text"
        value={description}
        maxLength={199}
        disabled={false}
        handleChange={(e) => setDescription(e)}
      />
      <LabeledInput
        label={t("productPrice")}
        type="number"
        value={price}
        maxLength={199}
        disabled={false}
        handleChange={(e) => setPrice(e)}
      />
      <div className="flex flex-row justify-between gap-5">
        <select
          className="select select-error w-[50%]   bg-primary text-secondary"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled selected>
            {t("selectProductCategory")}
          </option>
          {categoryData.map((categories) => (
            <option key={categories.id}>{categories.name}</option>
          ))}
        </select>
        <input
          type="file"
          className="file-input file-input-bordered file-input-error  w-[50%]  bg-primary text-secondary"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => {
                if (event.target && typeof event.target.result === "string") {
                  const imageData = event.target.result;
                  setImage(imageData);
                }
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="form-control">
          <label className="cursor-pointer label  flex gap-4">
            <input
              type="checkbox"
              checked={onSale}
              onChange={(e) => setOnSale(e.target.checked)}
              className="checkbox checkbox-error"
            />
            <span className="label-text text-secondary">{t("onSale")}</span>
          </label>
        </div>
        <div className={`w-full ${onSale ? "no-underline" : "line-through "}`}>
          <LabeledInput
            label={t("productSalePrice")}
            type="text"
            value={salePrice}
            maxLength={199}
            disabled={!onSale}
            handleChange={(e) => setSalePrice(e)}
          />
        </div>
      </div>
      <MainButton
        size="w-full"
        buttonAction={addProduct}
        label={t("addProduct")}
      />
      <div className={` ${errorOpen ? "block" : "hidden"} `}>
        <ErrorPopup
          errorMessage={errorMessage}
          closeError={() => handleErrorClose()}
        />
      </div>
    </div>
  );
};

export default AddProduct;
