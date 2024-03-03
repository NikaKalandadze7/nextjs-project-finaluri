import { ProductCartResponseInterface, removeFromCartInterface } from "@/types";
import { MainUrl } from "@/utils/consts";
import { refreshTokenFetchService } from "@Services";

const removeFromCartService = async ({
  id,
  removeAll,
}: removeFromCartInterface): Promise<ProductCartResponseInterface> => {
  let url = `${MainUrl}/cart/${id}`;

  const queryParams = new URLSearchParams();

  if (removeAll !== undefined) {
    queryParams.append("removeAll", removeAll.toString());
  }

  if (Array.from(queryParams).length > 0) {
    url += `?${queryParams.toString()}`;
  }
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

    const data: ProductCartResponseInterface = await response.json();
    return data;
  } catch (error) {
    throw new Error("There was an error processing your request");
  }
};

export default removeFromCartService;
