import React from "react";
import MainButton from "../MainButton/MainButton";
import {
  useIsLoggedInStore,
  useUserInfoStore,
  useShoppingCartStore,
  useWishlistStore,
} from "@/store";

const Logout = () => {
  const { setLoggedIn } = useIsLoggedInStore();
  const { userInfo, setUserInfo } = useUserInfoStore();
  const { clearCart } = useShoppingCartStore();
  const { clearWishlist } = useWishlistStore();

  const handleLogOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setUserInfo(null);
    clearCart();
    clearWishlist();
  };
  return (
    <div>
      <h1 className="mb-6 text-xl text-black">{`Hello, ${userInfo?.first_name} ${userInfo?.last_name}`}</h1>
      <MainButton
        size={"w-[100%]"}
        label="Log out"
        buttonAction={handleLogOut}
      />
    </div>
  );
};

export default Logout;
