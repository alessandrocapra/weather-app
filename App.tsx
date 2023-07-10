import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherForecast from "./src/screens/WeatherForecast";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <WeatherForecast />
      </QueryClientProvider>
    </Provider>
  );
}
