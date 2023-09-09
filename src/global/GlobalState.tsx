import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || {},
  cart: [] as any,
};

const GlobalState = createSlice({
  name: "e-commerce",
  initialState,
  reducers: {
    createUser: (state: any, { payload }: any) => {
      state.user = payload;
    },
    logOut: (state: any) => {
      state.user = null;
    },

    addToCart: (state, { payload }) => {
      const checkCart = state.cart.findIndex((el: any) => {
        return el.id === payload.id;
      });
      if (checkCart >= 0) {
        state.cart[checkCart].qty += 1;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }
    },
  },
});

export const { createUser, logOut } = GlobalState.actions;

export default GlobalState.reducer;
