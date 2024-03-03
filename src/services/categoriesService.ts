import { MainUrl } from "@/utils/consts";
import { CategoriesInterface } from "@/types";

export default async function categoriesService(): Promise<
  CategoriesInterface[]
> {
  try {
    const response = await fetch(`${MainUrl}/product-category`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: CategoriesInterface[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
}
