import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
  cart: [],

  // Add Product
  addToCart: (product) => {
    const cart = get().cart;

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      });

      return;
    }

    set({
      cart: [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ],
    });
  },

  // Remove Product
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.id !== id
      ),
    })),

  // Increase Quantity
  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    })),

  // Decrease Quantity
  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  // Clear Cart
  clearCart: () => set({ cart: [] }),

  // Total Items
  totalItems: () =>
    get().cart.reduce(
      (total, item) => total + item.quantity,
      0
    ),

  // Total Price
  totalPrice: () =>
    get().cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    ),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;