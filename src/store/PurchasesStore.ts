import { create } from "zustand";
import { PurchaseInterface } from "@/types";
import { getPurchasesService } from "@/services";

interface PurchasesState {
  purchases: PurchaseInterface[];
  setPurchases: (Purchases: PurchaseInterface[]) => void;
  fetchPurchases: () => Promise<void>;
  clearPurchases: () => void;
}

const usePurchasesStore = create<PurchasesState>((set) => ({
  purchases: [],
  setPurchases: (purchases: PurchaseInterface[]) => set({ purchases }),
  fetchPurchases: async () => {
    try {
      const purchases = await getPurchasesService();
      set({ purchases });
    } catch (error) {
      console.error(error);
    }
  },
  clearPurchases: () => {
    set({ purchases: [] });
  },
}));

export default usePurchasesStore;
