"use client";
import ErrorPopup from "@/components/ErrorPopup/ErrorPopup";
import LabeledInput from "@/components/LabeledInput/LabeledInput";
import MainButton from "@/components/MainButton/MainButton";
import { newPasswordService } from "@/services";
import { useIsLoggedInStore, useUserInfoStore } from "@/store";
import Link from "next/link";
import React, { useState } from "react";

const ChangePassword = () => {
  const { userInfo } = useUserInfoStore();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const handleErrorClose = () => {
    setErrorOpen(false);
  };
  const onUpdate = async () => {
    try {
      const response = await newPasswordService({
        password,
      });
      console.log(response);
    } catch (error) {
      if (password != confirmPassword) {
        setErrorMessage("New Passwords do not match!");
      } else {
        setErrorMessage("Failed to update user info");
      }
      setErrorOpen(true);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-9 w-full">
      <div className="flex flex-col items-center text-lg text-black text-center ">
        <h3 className="flex gap-2">
          <span>Welcome!</span>
          <span className="text-[#ef4c53] font-semibold">
            {userInfo?.first_name} {userInfo?.last_name}
          </span>
        </h3>
        <p>You can change your password here or</p>
        <Link className="text-[#ef4c53] font-semibold" href={"/account"}>
          Click Here to update your personal information
        </Link>
      </div>
      <div className="p-12 shadow-lg rounded-lg flex flex-row gap-12 flex-wrap w-[50%]">
        <form
          className="flex flex-row w-full flex-wrap gap-4 items-center justify-between "
          autoComplete="new-password"
        >
          <div className="flex flex-row gap-4 w-full items-center ">
            <LabeledInput
              label="New Password"
              type="password"
              value={password}
              maxLength={999}
              handleChange={(e) => setPassword(e)}
              disabled={false}
            />
          </div>
          <div className="flex flex-row gap-4 w-full items-center ">
            <LabeledInput
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              maxLength={999}
              handleChange={(e) => setConfirmPassword(e)}
              disabled={false}
            />
          </div>

          <MainButton
            label={"Update Password"}
            size={"w-[100%]"}
            buttonAction={() => onUpdate()}
          />
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
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
