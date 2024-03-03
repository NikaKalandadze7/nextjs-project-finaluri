import { MainUrl } from "@/utils/consts";
import { ProductCartResponseInterface } from "@/types";
import { refreshTokenFetchService } from "@Services";

export default async function getCartservice(): Promise<
  ProductCartResponseInterface[]
> {
  try {
    const response = await refreshTokenFetchService(`${MainUrl}/cart`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: ProductCartResponseInterface[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch cart:", error);
    throw error;
  }
}
