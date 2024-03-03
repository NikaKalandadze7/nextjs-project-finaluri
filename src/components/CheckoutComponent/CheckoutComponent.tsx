"use client";
import React from "react";
import {
  useUserInfoStore,
  useShoppingCartStore,
  useIsLoggedInStore,
} from "@/store";
import ShippingAddress from "../ShippingAddress/ShippingAddress";
import Link from "next/link";

const CheckoutComponent = () => {
  const { totalItemCount, totalPrice } = useShoppingCartStore();
  const { userInfo } = useUserInfoStore();
  const { loggedIn } = useIsLoggedInStore();

  return (
    <div className="flex flex-col justify-center items-center w-full text-black gap-3">
      <h1 className=" text-xl text-black">
        Hello,
        <span className="text-[#ef4c53]">{` ${userInfo?.first_name} ${userInfo?.last_name}`}</span>
      </h1>
      {totalItemCount === 0 ? (
        <h4 className=" text-xl text-black">
          You dont have any items in your cart, Please visit our{" "}
          <Link href={"/products"} className="text-[#ef4c53]">
            Products Page
          </Link>
        </h4>
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex gap-2">
            You have
            <span className="text-blue-600 font-bold text-lg">
              {totalItemCount}
            </span>
            Items in your Cart
          </div>
          <div className="flex gap-2">
            Total Price of your items:
            <span className="text-red-600 font-bold text-lg">
              ${totalPrice}
            </span>
          </div>
          <h4 className=" text-xl text-black">
            Please Enter your Shipping Address:
          </h4>
          <ShippingAddress />
        </div>
      )}
    </div>
  );
};

export default CheckoutComponent;
