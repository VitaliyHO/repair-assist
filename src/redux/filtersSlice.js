import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

const persistConfig = {
  key: "filters",
  storage,
};

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = persistReducer(persistConfig, filtersSlice.reducer);
