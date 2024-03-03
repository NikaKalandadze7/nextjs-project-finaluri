import { UserInfoInterface } from "@/types";
import { refreshTokenFetchService } from "@Services";
import { MainUrl } from "@/utils/consts";

interface newPasswordInterface {
  password: string;
}

const newPasswordService = async ({
  password,
}: newPasswordInterface): Promise<UserInfoInterface> => {
  const dataSend = {
    password,
  };
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  try {
    const response = await refreshTokenFetchService(`${MainUrl}/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSend),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: UserInfoInterface = await response.json();
    return data;
  } catch (error) {
    throw new Error("There was an error processing your request");
  }
};

export default newPasswordService;
