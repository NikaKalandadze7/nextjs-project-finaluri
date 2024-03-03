"use client";
import React, { useState } from "react";
import { ErrorPopup, InputForm, Logout, MainButton } from "@Components";
import Link from "next/link";
import { useIsLoggedInStore, useUserInfoStore } from "@/store";
import { signUpService, userInfoService } from "@/services";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [phoneNumber, setphoneNumber] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const { loggedIn, setLoggedIn } = useIsLoggedInStore();
  const { userInfo, setUserInfo } = useUserInfoStore();

  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  const onSignUp = async () => {
    try {
      const response = await signUpService({
        first_name: fname,
        last_name: lname,
        email,
        password,
        phone_number: phoneNumber,
      });
      localStorage.setItem("accessToken", response.access_token);
      localStorage.setItem("refreshToken", response.refresh_token);

      setLoggedIn(true);
      fetchUserInfo();
    } catch (error) {
      if (!email || !password || !fname || !lname || phoneNumber) {
        setErrorMessage("Please fill in all Fields!");
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
      {loggedIn ? (
        <Logout />
      ) : (
        <>
          <form
            className="flex flex-col gap-10 w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-black flex flex-col">
              <h1 className="text-[36px] text-black">Create an Account</h1>
              <span className="">Enter your details below</span>
            </div>
            <InputForm
              type="text"
              label="First Name"
              handleChange={(e) => setFname(e)}
              maxLength={999}
            />
            <InputForm
              type="text"
              label="Last Name"
              handleChange={(e) => setLname(e)}
              maxLength={999}
            />
            <InputForm
              type="email"
              label="Email"
              handleChange={(e) => setEmail(e)}
              maxLength={999}
            />
            <InputForm
              type="text"
              label="Phone Number"
              handleChange={(e) => setphoneNumber(e)}
              maxLength={9}
            />
            <InputForm
              type="password"
              label="Password"
              handleChange={(e) => setPassword(e)}
              maxLength={999}
            />
            <div className="flex flex-col justify-between items-center relative gap-5">
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
                label={"Create Account"}
                size={"w-[100%]"}
                buttonAction={() => onSignUp()}
              />
              <div className="flex flex-row gap-4">
                <span>Already have an account?</span>
                <Link href="/authenticate" className="text-[#DB4444]">
                  Log In
                </Link>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default SignUp;
