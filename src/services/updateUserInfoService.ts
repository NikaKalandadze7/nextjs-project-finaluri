import { UserInfoInterface } from "@/types";
import { refreshTokenFetchService } from "@Services";
import { MainUrl } from "@/utils/consts";

interface UpdateUserInfoInterface {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | number;
}

const updateUserInfoService = async ({
  first_name,
  last_name,
  email,
  phone_number,
}: UpdateUserInfoInterface): Promise<UserInfoInterface> => {
  let dataSend = {
    first_name,
    last_name,
    email,
    phone_number,
  };

  // Function to make the original request
  const makeRequest = async (token: string | null) => {
    return fetch(`${MainUrl}/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSend),
    });
  };

  // Function to refresh tokens
  const refreshTokens = async () => {
    const refreshResponse = await fetch(`${MainUrl}/auth/update-tokens`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: localStorage.getItem("refreshToken"), // Assuming you store your refresh token in local storage
      }),
    });
    if (!refreshResponse.ok) {
      throw new Error("Could not refresh tokens.");
    }
    return refreshResponse.json();
  };

  try {
    let token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;
    let response = await makeRequest(token);

    if (response.status === 401) {
      // Token might be expired, try to refresh it
      const tokens = await refreshTokens();
      // Update stored tokens
      localStorage.setItem("accessToken", tokens.access_token);
      localStorage.setItem("refreshToken", tokens.refresh_token);

      // Retry the original request with the new token
      response = await makeRequest(tokens.access_token);
    }

    if (!response.ok) {
      throw new Error("Network response was not ok after retrying.");
    }

    // If the request was successful, parse and return the data
    const data: UserInfoInterface = await response.json();
    return data;
  } catch (error) {
    console.error("Error processing request:", error);
    throw new Error("There was an error processing your request");
  }
};

export default updateUserInfoService;
