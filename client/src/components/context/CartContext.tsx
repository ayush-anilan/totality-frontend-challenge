import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define the shape of the cart item
interface CartItem {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

// Define the actions for the reducer
type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "INCREMENT_QUANTITY"; id: string }
  | { type: "DECREMENT_QUANTITY"; id: string };

// Define the initial state for the reducer
const initialState: CartItem[] = [];

// Define the reducer function
function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.find((item) => item.id === action.item.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.item, quantity: 1 }];
      }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    case "INCREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
}

// Define the context
const CartContext = createContext<{
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  dispatch: React.Dispatch<CartAction>;
}>({
  cartItems: initialState,
  addToCart: () => null,
  dispatch: () => null,
});

// Define the provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
