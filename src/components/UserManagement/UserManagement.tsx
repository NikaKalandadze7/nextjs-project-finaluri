"use client";
import React, { useEffect, useState } from "react";
import { useIsLoggedInStore, useUserInfoStore } from "@/store";
import { ErrorPopup, LabeledInput, MainButton } from "@Components";
import { updateUserInfoService, userInfoService } from "@/services";
import Link from "next/link";

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
        setErrorMessage("Please fill in all Fields!");
      } else {
        setErrorMessage("Failed to update user info");
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
      <div className="flex flex-col items-center text-lg text-black text-center ">
        <h3 className="flex gap-2">
          <span>Welcome!</span>
          <span className="text-[#ef4c53] font-semibold">
            {userInfo?.first_name} {userInfo?.last_name}
          </span>
        </h3>
        <p>You can update your personal information here or</p>
        <Link
          className="text-[#ef4c53] font-semibold"
          href={"/account/changepassword"}
        >
          Click Here to change your password
        </Link>
      </div>
      <div className="p-12 shadow-lg rounded-lg flex flex-row gap-12 flex-wrap w-[50%]">
        <form
          className="flex flex-row w-full flex-wrap gap-4 items-center justify-between "
          autoComplete="new-password"
        >
          <div className="flex flex-row gap-4 w-[calc(50%-16px)] items-between ">
            <LabeledInput
              label="First Name"
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
              Edit
            </button>
          </div>
          <div className="flex flex-row gap-4 w-[calc(50%-16px)] items-center ">
            <LabeledInput
              label="Last Name"
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
              Edit
            </button>
          </div>
          <div className="flex flex-row gap-4 w-[calc(50%-16px)] items-center ">
            <LabeledInput
              label="Email Address"
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
              Edit
            </button>
          </div>
          <div className="flex flex-row gap-4 w-[calc(50%-16px)] items-center ">
            <LabeledInput
              label="Phone Number"
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
              Edit
            </button>
          </div>

          <MainButton
            label={"Update account Information"}
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
