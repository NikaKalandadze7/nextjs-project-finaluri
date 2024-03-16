import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const NotLoggedIn = () => {
  const t = useTranslations("User");
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;

  return (
    <div>
      <Link
        className="text-2xl text-secondary"
        href={localizedPath("/authenticate")}
      >
        {t("notLoggedIn")}{" "}
      </Link>
    </div>
  );
};

export default NotLoggedIn;
