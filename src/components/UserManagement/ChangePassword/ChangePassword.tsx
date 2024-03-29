"use client";
import ErrorPopup from "@/components/ErrorPopup/ErrorPopup";
import LabeledInput from "@/components/LabeledInput/LabeledInput";
import MainButton from "@/components/MainButton/MainButton";
import { newPasswordService } from "@/services";
import { useIsLoggedInStore, useUserInfoStore } from "@/store";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const ChangePassword = () => {
  const { userInfo } = useUserInfoStore();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const t = useTranslations("User");
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;
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
        setErrorMessage(t("Error4"));
      } else {
        setErrorMessage(t("Error5"));
      }
      setErrorOpen(true);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-9 w-full">
      <div className="flex flex-col items-center text-lg text-secondary text-center ">
        <h3 className="flex gap-2">
          <span>{t("welcome")}!</span>
          <span className="text-[#ef4c53] font-semibold">
            {userInfo?.first_name} {userInfo?.last_name}
          </span>
        </h3>
        <p>{t("changePasswordPrompt")}</p>
        <Link
          className="text-[#ef4c53] font-semibold"
          href={localizedPath("/account")}
        >
          {t("updatePersonalInfoLink")}
        </Link>
      </div>
      <div className="p-12 shadow-lg rounded-lg flex flex-row gap-12 flex-wrap zero:w-full lg:w-[50%]">
        <form
          className="flex flex-row w-full flex-wrap gap-4 items-center justify-between "
          autoComplete="new-password"
        >
          <div className="flex flex-row gap-4 w-full items-center ">
            <LabeledInput
              label={t("newPassword")}
              type="password"
              value={password}
              maxLength={999}
              handleChange={(e) => setPassword(e)}
              disabled={false}
            />
          </div>
          <div className="flex flex-row gap-4 w-full items-center ">
            <LabeledInput
              label={t("confirmPassword")}
              type="password"
              value={confirmPassword}
              maxLength={999}
              handleChange={(e) => setConfirmPassword(e)}
              disabled={false}
            />
          </div>

          <MainButton
            label={t("updatePassword")}
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
