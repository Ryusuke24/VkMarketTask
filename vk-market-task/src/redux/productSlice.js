import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    removeQuantity(state, action) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = 0;
          return product;
        }
        return product;
      });
    },
    incQuantityProduct(state, action) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = product?.quantity + 1 || 1;
          return product;
        }
        return product;
      });
    },
    decQuantityProduct(state, action) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = product?.quantity - 1;
          return product;
        }
        return product;
      });
    },
  },
  extraReducers(buidler) {
    buidler
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.products = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const {
  removeQuantity,
  removeProduct,
  incQuantityProduct,
  decQuantityProduct,
} = productSlice.actions;
export default productSlice.reducer;
