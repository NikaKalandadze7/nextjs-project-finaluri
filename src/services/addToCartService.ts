import { ProductCartResponseInterface, addToCartInterface } from "@/types";
import { MainUrl } from "@/utils/consts";
import { refreshTokenFetchService } from "@Services";

const addToCartService = async ({
  id,
}: addToCartInterface): Promise<ProductCartResponseInterface> => {
  const dataSend = {
    product_id: id,
  };

  try {
    const response = await refreshTokenFetchService(`${MainUrl}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSend),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: ProductCartResponseInterface = await response.json();
    return data;
  } catch (error) {
    throw new Error("There was an error processing your request");
  }
};

export default addToCartService;
