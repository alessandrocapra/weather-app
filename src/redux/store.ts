import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./location/locationSlice";
import shouldFetchReducer from "./shouldFetch/shouldFetchSlice";

const store = configureStore({
  reducer: {
    location: locationReducer,
    shouldFetch: shouldFetchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
