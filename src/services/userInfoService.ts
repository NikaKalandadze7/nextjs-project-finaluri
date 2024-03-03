import { MainUrl } from "@/utils/consts";
import { refreshTokenFetchService } from "@Services";

import { UserInfoInterface } from "@/types";

export default async function userInfoService(): Promise<UserInfoInterface[]> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  try {
    const response = await refreshTokenFetchService(
      `${MainUrl}/user/current-user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: UserInfoInterface[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    throw error;
  }
}
