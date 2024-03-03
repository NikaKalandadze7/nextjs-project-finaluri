import { CategoriesInterface } from "@/types";
import { MainUrl } from "@/utils/consts";
import { refreshTokenFetchService } from "@Services";

const addCategoryService = async ({
  name,
  image,
}: CategoriesInterface): Promise<CategoriesInterface> => {
  const dataSend = {
    name,
    image,
  };

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  try {
    const response = await refreshTokenFetchService(
      `${MainUrl}/product-category`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: CategoriesInterface = await response.json();
    return data;
  } catch (error) {
    throw new Error("There was an error processing your request");
  }
};

export default addCategoryService;
