import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const fetchProducts = createAsyncThunk(
  "inventory/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"
    );
    return response.data;
  }
);

const initialState = {
  products: [
    {
      id: 1,
      name: "Default entry",
      category: "Default Category",
      price: "$5",
      quantity: 5,
      disabled: false,
    },
  ],
  view: "admin",
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.view = state.view === "admin" ? "user" : "admin";
    },
    editProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1)
        state.products[index] = { ...state.products[index], ...updatedProduct };
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
    disableProduct: (state, action) => {
      const id = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.products[index].disabled = !state.products[index].disabled;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.map((product) => ({
        ...product,
        id: uuidv4(),
      }));
    });
  },
});

export const { toggleView, editProduct, deleteProduct, disableProduct } =
  inventorySlice.actions;

export default inventorySlice.reducer;
