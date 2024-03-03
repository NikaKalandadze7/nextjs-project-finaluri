"use client";
import React, { useEffect, useState } from "react";
import { ErrorPopup, InputForm, Logout, MainButton } from "@Components";
import Link from "next/link";
import { loginService, userInfoService } from "@/services";
import {
  useIsLoggedInStore,
  useUserInfoStore,
  useShoppingCartStore,
} from "@/store";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const { loggedIn, setLoggedIn } = useIsLoggedInStore();
  const { userInfo, setUserInfo } = useUserInfoStore();
  const { fetchCartItems } = useShoppingCartStore();

  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  const onLogin = async () => {
    try {
      const response = await loginService({ email, password });
      localStorage.setItem("accessToken", response.access_token);
      localStorage.setItem("refreshToken", response.refresh_token);

      setLoggedIn(true);

      fetchUserInfo();
      await fetchCartItems();
    } catch (error) {
      if (!email || !password || email === "" || password === "") {
        setErrorMessage("Please fill in all Fields");
      } else {
        setErrorMessage("Incorrect email or password");
      }
      setErrorOpen(true);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const fetchedUserInfo = await userInfoService();
      localStorage.setItem("userInfo", JSON.stringify(fetchedUserInfo));
      setUserInfo(fetchedUserInfo);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-10 w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        {loggedIn ? (
          <>
            <Logout />
          </>
        ) : (
          <>
            <div className="text-black flex flex-col">
              <h1 className="text-[36px] text-black">Log in to Exclusive</h1>
              <span className="">Enter your details below</span>
            </div>
            <InputForm
              type="email"
              label="Email"
              handleChange={(e) => setEmail(e)}
              maxLength={999}
            />
            <InputForm
              type="password"
              label="Password"
              handleChange={(e) => setPassword(e)}
              maxLength={999}
            />
            <div className="flex flex-row justify-between items-center relative">
              <div
                className={`absolute opacity-90 bottom-[-80px] left-10 ${
                  errorOpen ? "block" : "hidden"
                } `}
              >
                <ErrorPopup
                  errorMessage={errorMessage}
                  closeError={() => handleErrorClose()}
                />
              </div>
              <MainButton
                label={"Log In"}
                size={"w-[50%]"}
                buttonAction={() => onLogin()}
              />
              <Link href="/authenticate/signup" className="text-[#DB4444]">
                Register instead
              </Link>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
