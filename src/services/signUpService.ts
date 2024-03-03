import { TokenInterface, SignUpInterface } from "@/types";
import { MainUrl } from "@/utils/consts";

const signUpService = async ({
  first_name,
  last_name,
  email,
  password,
  phone_number,
}: SignUpInterface): Promise<TokenInterface> => {
  const dataSend = {
    first_name,
    last_name,
    email,
    password,
    phone_number,
  };

  try {
    const response = await fetch(`${MainUrl}/auth/register`, {
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

export default signUpService;
