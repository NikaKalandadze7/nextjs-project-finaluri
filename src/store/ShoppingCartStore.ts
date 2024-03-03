import { create } from "zustand";
import { CartProductInterface, ProductCartResponseInterface } from "@/types";
import { getCartService } from "@/services";

interface ProductCartState {
  shoppingCart: ProductCartResponseInterface[];
  totalItemCount: number;
  totalPrice: number;
  setShoppingCart: (shoppingCart: ProductCartResponseInterface[]) => void;
  fetchCartItems: () => Promise<void>;
  clearCart: () => void;
}

const calculateAndSetCart = (
  set: any,
  shoppingCart: ProductCartResponseInterface[]
) => {
  const totalItemCount = shoppingCart.reduce(
    (total, item) => total + item.count,
    0
  );
  const totalPrice = shoppingCart.reduce((total, item) => {
    const price = item.cartProduct.salePrice ?? item.cartProduct.price;
    return total + price * item.count;
  }, 0);

  set({ shoppingCart, totalItemCount, totalPrice });
};

const useShoppingCartStore = create<ProductCartState>((set) => ({
  shoppingCart: [],
  totalItemCount: 0,
  totalPrice: 0,
  setShoppingCart: (shoppingCart: ProductCartResponseInterface[]) =>
    calculateAndSetCart(set, shoppingCart),
  fetchCartItems: async () => {
    try {
      const shoppingCart: ProductCartResponseInterface[] =
        await getCartService();
      calculateAndSetCart(set, shoppingCart);
    } catch (error) {
      console.error(error);
    }
  },
  clearCart: () => {
    set({ shoppingCart: [], totalItemCount: 0, totalPrice: 0 });
  },
}));

export default useShoppingCartStore;
