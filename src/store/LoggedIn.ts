import { create } from "zustand";
import { LoggedInInterface } from "@/types";

const useIsLoggedInStore = create<LoggedInInterface>((set) => ({
  loggedIn: false,
  setLoggedIn: (value) => set({ loggedIn: value }),
  initializeLoggedIn: () => {
    set({ loggedIn: !!localStorage.getItem("accessToken") });
  },
}));
export default useIsLoggedInStore;
