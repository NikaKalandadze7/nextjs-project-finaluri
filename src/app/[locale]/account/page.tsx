"use client";
import { NotLoggedIn, UserManagement } from "@/components";
import { useIsLoggedInStore } from "@/store";
import React from "react";

const page = () => {
  const { loggedIn } = useIsLoggedInStore();
  return (
    <div className="container flex min-h-screen flex-col items-center m-auto ">
      <div className="flex flex-row w-full justify-center pt-20">
        {loggedIn ? (
          <UserManagement />
        ) : (
          <div>
            <NotLoggedIn />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
