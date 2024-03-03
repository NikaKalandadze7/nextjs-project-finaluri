import Link from "next/link";
import React from "react";

const NotLoggedIn = () => {
  return (
    <div>
      <Link className="text-2xl text-black" href={"/authenticate"}>
        Please Click here to log into the website
      </Link>
    </div>
  );
};

export default NotLoggedIn;
