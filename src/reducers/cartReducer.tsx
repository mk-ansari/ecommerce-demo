import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const cartReducer = createReducer(initialState, {
  INCREMENT: (state, action) => {
    state.count += 1;
  },
  DECREMENT: (state, action) => {
    state.count -= 1;
  },
  INCREMENT_BY_VALUE: (state, action) => {
    state.count += action.payload;
  },
});