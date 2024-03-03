import { ProductInterface } from "@/types";
import { MainUrl } from "@/utils/consts";
import { refreshTokenFetchService } from "@Services";

const addProductService = async ({
  title,
  category_name,
  description,
  image,
  salePrice,
  price,
}: ProductInterface): Promise<ProductInterface> => {
  const dataSend = {
    title,
    category_name,
    description,
    image,
    salePrice,
    price,
  };

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  try {
    const response = await refreshTokenFetchService(`${MainUrl}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSend),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: ProductInterface = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error processing your request:", error);
    throw new Error("There was an error processing your request");
  }
};

export default addProductService;
