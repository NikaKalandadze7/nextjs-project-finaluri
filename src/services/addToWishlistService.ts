import { addToCartInterface, addToWishlistResponseInterface } from "@/types";
import { MainUrl } from "@/utils/consts";
import { refreshTokenFetchService } from "@Services";

const addToWishlistService = async ({
  id,
}: addToCartInterface): Promise<addToWishlistResponseInterface> => {
  const dataSend = {
    product_id: id,
  };

  try {
    const response = await refreshTokenFetchService(
      `${MainUrl}/liked-products`,
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

    const data: addToWishlistResponseInterface = await response.json();
    return data;
  } catch (error) {
    throw new Error("There was an error processing your request");
  }
};

export default addToWishlistService;
