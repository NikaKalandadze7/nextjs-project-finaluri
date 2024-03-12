import React from "react";
import MainButton from "../MainButton/MainButton";
import {
  useIsLoggedInStore,
  useUserInfoStore,
  useShoppingCartStore,
  useWishlistStore,
  usePurchasesStore,
} from "@/store";

const Logout = () => {
  const { setLoggedIn } = useIsLoggedInStore();
  const { userInfo, setUserInfo } = useUserInfoStore();
  const { clearCart } = useShoppingCartStore();
  const { clearWishlist } = useWishlistStore();
  const { clearPurchases } = usePurchasesStore();
  const handleLogOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setUserInfo(null);
    clearCart();
    clearWishlist();
    clearPurchases();
  };
  return (
    <div>
      <h1 className="mb-6 text-xl text-secondary">{`Hello, ${userInfo?.first_name} ${userInfo?.last_name}`}</h1>
      <MainButton
        size={"w-[100%]"}
        label="Log out"
        buttonAction={handleLogOut}
      />
    </div>
  );
};

export default Logout;
