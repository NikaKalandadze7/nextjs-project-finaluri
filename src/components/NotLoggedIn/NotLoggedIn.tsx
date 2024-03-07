import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const NotLoggedIn = () => {
  const t = useTranslations("User");
  return (
    <div>
      <Link className="text-2xl text-black" href={"/authenticate"}>
        {t("notLoggedIn")}{" "}
      </Link>
    </div>
  );
};

export default NotLoggedIn;
