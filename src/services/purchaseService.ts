import { PurchaseInterface } from "@/types";
import { MainUrl } from "@/utils/consts";
import { refreshTokenFetchService } from "@Services";

const purchaseService = async ({
  totalPrice,
  totalItems,
}: PurchaseInterface): Promise<PurchaseInterface> => {
  const dataSend = {
    totalPrice,
    totalItems,
  };

  try {
    const response = await refreshTokenFetchService(`${MainUrl}/purchases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSend),
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

export default purchaseService;
