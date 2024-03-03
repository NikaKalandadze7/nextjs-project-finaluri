"use client";
import LabeledInput from "../LabeledInput/LabeledInput";
import MainButton from "../MainButton/MainButton";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import { addCategoryService } from "@/services";
import React, { useEffect, useState } from "react";

const AddCategory = () => {
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [newCategory, setNewCategory] = useState<string>("");
  const [newCategoryImage, setNewCategoryImage] = useState<string>("");
  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  const addCategory = async () => {
    try {
      const response = await addCategoryService({
        name: newCategory,
        image: newCategoryImage,
      });
      console.log(response);
    } catch (error) {
      if (!newCategory || !newCategoryImage) {
        setErrorMessage("Please fill in all Fields!");
      } else {
        setErrorMessage("Unable To add Category");
      }
      setErrorOpen(true);
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <LabeledInput
        label="New Category Name"
        type="text"
        value={newCategory}
        maxLength={99}
        disabled={false}
        handleChange={(e) => setNewCategory(e)}
      />
      <input
        type="file"
        className="file-input file-input-bordered file-input-error  w-full  bg-white text-black"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target && typeof event.target.result === "string") {
                const categoryImageData = event.target.result;
                setNewCategoryImage(categoryImageData);
                console.log(categoryImageData);
              }
            };
            reader.readAsDataURL(file);
          }
        }}
      />
      <MainButton
        size={"w-full"}
        buttonAction={() => addCategory()}
        label={"Add Category"}
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

export default AddCategory;
