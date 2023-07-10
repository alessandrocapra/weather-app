import { RootState } from "../store";

export const selectShouldFetch = (state: RootState) => state.shouldFetch.value;
