import React, { ReactElement, ReactNode, FC } from "react";
import {
  render as rtlRender,
  RenderOptions,
} from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import locationSlice from "../redux/location/locationSlice";

interface CustomRenderOptions extends Omit<RenderOptions, "queries"> { }
interface AllTheProvidersProps {
  children: ReactNode;
}

const createStore = (): EnhancedStore => {
  return configureStore({
    reducer: {
      location: locationSlice,
    },
  });
};

const createMockQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => { },
    },
  });
};

const customRender = (
  ui: ReactElement,
  options?: CustomRenderOptions & { children?: ReactNode }
) => {
  const store = createStore();
  const mockQueryClient = createMockQueryClient();

  const Wrapper: FC<AllTheProvidersProps> = ({ children }) => (
    <ReduxProvider store={store}>
      <QueryClientProvider client={mockQueryClient}>
        {children}
      </QueryClientProvider>
    </ReduxProvider>
  );

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...options }),
    store,
  };
};

export { customRender as render };
export * from "@testing-library/react-native";
