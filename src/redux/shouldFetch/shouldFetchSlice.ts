
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShouldFetchState {
  value: boolean;
}

const initialState: ShouldFetchState = { value: false };

const shouldFetchSlice = createSlice({
  name: 'shouldFetch',
  initialState,
  reducers: {
    setShouldFetch: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setShouldFetch } = shouldFetchSlice.actions;
export default shouldFetchSlice.reducer;
