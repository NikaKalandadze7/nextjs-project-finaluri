"use client";
import React, { useEffect, useState } from "react";
import { useIsLoggedInStore, useUserInfoStore } from "@/store";
import { ErrorPopup, LabeledInput, MainButton } from "@Components";
import { updateUserInfoService, userInfoService } from "@/services";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const UserManagement = () => {
  const { userInfo, setUserInfo, initializeUserInfo } = useUserInfoStore();
  const { initializeLoggedIn } = useIsLoggedInStore();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState<string>(userInfo?.email);

  const [fname, setFname] = useState<string>(userInfo?.first_name);
  const [lname, setLname] = useState<string>(userInfo?.last_name);
  const [phoneNumber, setPhoneNumber] = useState<string>(
    userInfo?.phone_number
  );
  const [fNameDisabled, setFNameDisabled] = useState<boolean>(true);
  const [emailDisabled, setEmailDisabled] = useState<boolean>(true);
  const [lNameDisabled, setLNameDisabled] = useState<boolean>(true);
  const [phoneNumberDisabled, setPhoneNumberDisabled] = useState<boolean>(true);

  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const t = useTranslations("User");

  const handleFNameEditing = () => {
    setFNameDisabled(!fNameDisabled);
  };
  const handleLNameEditing = () => {
    setLNameDisabled(!lNameDisabled);
  };
  const handleEmailEditing = () => {
    setEmailDisabled(!emailDisabled);
  };
  const handlePhoneNumberEditing = () => {
    setPhoneNumberDisabled(!phoneNumberDisabled);
  };
  const handleErrorClose = () => {
    setErrorOpen(false);
  };
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;
  const onUpdate = async () => {
    try {
      const response = await updateUserInfoService({
        first_name: fname,
        last_name: lname,
        email,
        phone_number: phoneNumber,
      });
      localStorage.setItem("userInfo", JSON.stringify(response));
      setUserInfo(response);
    } catch (error) {
      if (
        !email ||
        email == "" ||
        !fname ||
        fname === "" ||
        !lname ||
        lname == "" ||
        !phoneNumber ||
        phoneNumber == ""
      ) {
        setErrorMessage(t("Error1"));
      } else {
        setErrorMessage(t("Error3"));
      }
      setErrorOpen(true);
    }
  };

  useEffect(() => {
    initializeLoggedIn();
    initializeUserInfo();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-9 w-full">
      <div className="flex flex-col items-center text-lg text-secondary text-center">
        <h3 className="flex gap-2">
          <span>{t("welcome")}!</span>
          <span className="text-[#ef4c53] font-semibold">
            {userInfo?.first_name} {userInfo?.last_name}
          </span>
        </h3>
        <p>{t("updateYourPersonalInformation")}</p>
        <Link href={localizedPath("/account/changepassword")}>
          <p className="text-[#ef4c53] font-semibold">
            {t("clickHereToChangeYourPassword")}
          </p>
        </Link>
      </div>
      <div className="p-12 shadow-lg rounded-lg flex flex-row gap-12 flex-wrap zero:w-full lg:w-[50%]">
        <form
          className="flex zero:flex-col xl:flex-row w-full flex-wrap gap-4 items-center justify-between"
          autoComplete="new-password"
        >
          <div className="flex zero:flex-col sm:flex-row gap-4 zero: w-full xl:w-[calc(50%-16px)] items-center">
            <LabeledInput
              label={t("firstName")}
              type="text"
              value={fname}
              maxLength={999}
              handleChange={(e) => setFname(e)}
              disabled={fNameDisabled}
            />
            <button
              type="button"
              className="text-[#ef4c53]"
              onClick={() => handleFNameEditing()}
            >
              {t("edit")}
            </button>
          </div>
          <div className="flex zero:flex-col sm:flex-row gap-4 zero: w-full xl:w-[calc(50%-16px)] items-center">
            <LabeledInput
              label={t("lastName")}
              type="text"
              value={lname}
              maxLength={999}
              handleChange={(e) => setLname(e)}
              disabled={lNameDisabled}
            />
            <button
              type="button"
              className="text-[#ef4c53]"
              onClick={() => handleLNameEditing()}
            >
              {t("edit")}
            </button>
          </div>
          <div className="flex zero:flex-col sm:flex-row gap-4 zero: w-full xl:w-[calc(50%-16px)] items-center ">
            <LabeledInput
              label={t("email")}
              type="email"
              value={email}
              maxLength={999}
              handleChange={(e) => setEmail(e)}
              disabled={emailDisabled}
            />
            <button
              type="button"
              className="text-[#ef4c53]"
              onClick={() => handleEmailEditing()}
            >
              {t("edit")}
            </button>
          </div>
          <div className="flex zero:flex-col sm:flex-row gap-4 zero: w-full xl:w-[calc(50%-16px)] items-center ">
            <LabeledInput
              label={t("phoneNumber")}
              type="text"
              value={phoneNumber}
              maxLength={8}
              handleChange={(e) => setPhoneNumber(e)}
              disabled={phoneNumberDisabled}
            />
            <button
              type="button"
              className="text-[#ef4c53]"
              onClick={() => handlePhoneNumberEditing()}
            >
              {t("edit")}
            </button>
          </div>

          <MainButton
            label={t("updateAccountInformation")}
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

export default UserManagement;
