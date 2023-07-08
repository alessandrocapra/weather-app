import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherForecast from "./src/screens/WeatherForecast";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherForecast />
    </QueryClientProvider>
  );
}
