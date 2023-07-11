import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeocodeLocation } from "../../utils/api.type";

const initialState: GeocodeLocation = {
  name: "",
  local_names: {},
  lat: 0,
  lon: 0,
  country: "",
  state: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (_state, action: PayloadAction<GeocodeLocation>) => {
      return action.payload;
    },
    clearLocation: () => initialState,
  },
});

export const { setLocation, clearLocation } = locationSlice.actions;
export default locationSlice.reducer;
