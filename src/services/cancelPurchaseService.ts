import { PurchaseInterface } from "@/types";
import removeFromWishlistInterface from "@/types/removeFromWishlist.interface";
import { MainUrl } from "@/utils/consts";
import { refreshTokenFetchService } from "@Services";

const cancelPurchaseService = async ({
  productId,
}: removeFromWishlistInterface): Promise<PurchaseInterface> => {
  let url = `${MainUrl}/purchases/${productId}`;

  try {
    const response = await refreshTokenFetchService(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: PurchaseInterface = await response.json();
    return data;
  } catch (error) {
    throw new Error("There was an error processing your request");
  }
};

export default cancelPurchaseService;
