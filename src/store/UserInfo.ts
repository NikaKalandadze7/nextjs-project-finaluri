import { create } from "zustand";
import { UserInfoInterface } from "@/types";

interface UserInfoState {
  userInfo: UserInfoInterface[] | null;
  setUserInfo: (userInfo: UserInfoInterface[] | null) => void;
  initializeUserInfo: () => void;
}

const useUserInfoStore = create<UserInfoState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo: UserInfoInterface[] | null) => set({ userInfo }),
  initializeUserInfo: () => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      set({ userInfo: JSON.parse(storedUserInfo) });
    } else {
      set({ userInfo: null });
    }
  },
}));

export default useUserInfoStore;
