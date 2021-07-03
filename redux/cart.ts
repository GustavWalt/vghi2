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
    removeFromCart: (state, action) => {
      const productToRemove = action.payload;
      console.log(current(state.items));
      let deletedOne = false;
      state.items = state.items.filter((item) => {
        if (!deletedOne && item.product.name === productToRemove) {
          deletedOne = true;
          return false;
        }
        return true;
      });
    },
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
