import { TokenInterface } from "@/types";
import { MainUrl } from "@/utils/consts";

interface LoginParams {
  email: string;
  password: string;
}
const loginService = async ({
  email,
  password,
}: LoginParams): Promise<TokenInterface> => {
  const dataSend = {
    email,
    password,
  };

  try {
    const response = await fetch(`${MainUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSend),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: TokenInterface = await response.json();
    return data;
  } catch (error) {
    throw new Error("There was an error processing your request");
  }
};

export default loginService;
