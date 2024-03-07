"use client";
import React, { useEffect } from "react";
import { LoggedInMenu, LoginIcon, SignUpIcon, UserIcon } from "@Components";
import Link from "next/link";
import { useIsLoggedInStore, useUserInfoStore } from "@/store";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const UserMenu = () => {
  const { loggedIn, initializeLoggedIn } = useIsLoggedInStore();
  const { initializeUserInfo } = useUserInfoStore();
  useEffect(() => {
    initializeLoggedIn();
    initializeUserInfo();
  }, []);
  const t = useTranslations("User");
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;
  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className={`${
            loggedIn ? "bg-[#ef4c53]" : "bg-black"
          } rounded-full h-8 w-8 flex justify-center items-center`}
        >
          <UserIcon color={"white"} height={28} width={28} />
        </div>
        <ul
          tabIndex={0}
          style={{
            backgroundImage:
              "linear-gradient(to right top, #5e007f, #6e2889, #7c4292, #8a5a9c, #9872a5, #916f97, #896c8a, #806a7e, #614f5b, #42353c, #241e20, #000000)",
          }}
          className="dropdown-content z-[9] menu w-56 bg-black text-white flex flex-col text-sm gap-3 font-semibold rounded-md"
        >
          {!loggedIn ? (
            <>
              <li>
                <Link
                  href={localizedPath("/authenticate")}
                  className="flex flex-row items-center gap-3"
                >
                  <LoginIcon color="white" height={18} width={18} />
                  <span>{t("logIn")} </span>
                </Link>
              </li>
              <li>
                <Link
                  href={localizedPath("/authenticate/signup")}
                  className="flex flex-row items-center gap-3"
                >
                  <SignUpIcon color="white" height={18} width={18} />
                  <span>{t("createAccount")}</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <LoggedInMenu />
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default UserMenu;
