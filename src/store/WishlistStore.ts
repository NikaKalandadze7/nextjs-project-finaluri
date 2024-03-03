import { create } from "zustand";
import { wishlistInterface } from "@/types";
import { getWishlistService } from "@/services";

interface WishlistState {
  wishlist: wishlistInterface[];
  setWishlist: (wishlist: wishlistInterface[]) => void;
  fetchWishlist: () => Promise<void>;
  clearWishlist: () => void;
}

const useWishlistStore = create<WishlistState>((set) => ({
  wishlist: [],
  setWishlist: (wishlist: wishlistInterface[]) => set({ wishlist }),
  fetchWishlist: async () => {
    try {
      const wishlist = await getWishlistService();
      set({ wishlist });
    } catch (error) {
      console.error(error);
    }
  },
  clearWishlist: () => {
    set({ wishlist: [] });
  },
}));

export default useWishlistStore;
