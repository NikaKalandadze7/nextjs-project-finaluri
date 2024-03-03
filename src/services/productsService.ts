import { MainUrl } from "@/utils/consts";
import { ProductInterface, fetchedProductsInterface } from "@/types";

interface ProductServiceParams {
  page?: number;
  pageSize?: number;
  minPrice?: number;
  maxPrice?: number;
  onlySales?: boolean;
  productName?: string;
  categoryName?: string;
}

export default async function productService(
  params?: ProductServiceParams
): Promise<fetchedProductsInterface[]> {
  try {
    let url = `${MainUrl}/product`;

    if (params) {
      const queryParams = new URLSearchParams();

      if (params.page) queryParams.append("page", params.page.toString());
      if (params.pageSize)
        queryParams.append("pageSize", params.pageSize.toString());
      if (params.minPrice)
        queryParams.append("minPrice", params.minPrice.toString());
      if (params.maxPrice)
        queryParams.append("maxPrice", params.maxPrice.toString());
      if (params.onlySales)
        queryParams.append("onlySales", params.onlySales.toString());
      if (params.categoryName)
        queryParams.append("categoryName", params.categoryName);
      if (params.productName)
        queryParams.append("productName", params.productName);

      url += `?${queryParams.toString()}`;
    }
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: fetchedProductsInterface[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
