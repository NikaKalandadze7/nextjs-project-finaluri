"use client";
import React, { ReactNode } from "react";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const Breadcrumb = ({
  homeElement,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths
    .split("/")
    .filter((path) => path)
    .slice(1);
  const { locale } = useParams();

  return (
    <div className={containerClasses}>
      <ul className="text-secondary">
        <li className={listClasses}>
          <Link href={`/${locale}`}>{homeElement}</Link>
        </li>
        {pathNames.map((link, index) => {
          let href = `/${locale}/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === `/${locale}${href}`
              ? `${listClasses} ${activeClasses}`
              : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1)
            : link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
