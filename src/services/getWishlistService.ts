import { MainUrl } from "@/utils/consts";
import { addToWishlistResponseInterface, wishlistInterface } from "@/types";
import { refreshTokenFetchService } from "@Services";

export default async function getWishlistService(): Promise<
  wishlistInterface[]
> {
  try {
    const response = await refreshTokenFetchService(
      `${MainUrl}/liked-products`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: wishlistInterface[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch Liked Products:", error);
    throw error;
  }
}
