import { MainUrl } from "@/utils/consts";
import { PurchaseInterface } from "@/types";
import { refreshTokenFetchService } from "@Services";

export default async function getPurchasesService(): Promise<
  PurchaseInterface[]
> {
  try {
    const response = await refreshTokenFetchService(`${MainUrl}/purchases`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: PurchaseInterface[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch cart:", error);
    throw error;
  }
}
