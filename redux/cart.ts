import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

// Skapar TypeScript typer för alla delar i Redux store.
interface Product {
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  amount: number;
}

interface Cart {
  items: CartItem[];
}

const initialState: Cart = {
  items: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart: (state, amount) => {},
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      state.items.push({
        product: product,
        amount: 1,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeFromCart, addToCart } = counterSlice.actions;

export default counterSlice.reducer;
