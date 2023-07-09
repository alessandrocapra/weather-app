import { Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../utils/api";

type TodayWeatherProps = {
  location: string;
  shouldFetch: boolean;
};

function TodayWeather({ location, shouldFetch }: TodayWeatherProps) {
  const { data, status, fetchStatus, error } = useQuery({
    queryKey: ["current_weather", location],
    queryFn: () => getCurrentWeather({ city: location }),
    enabled: shouldFetch,
  });

  if (status === "error") {
    return <Text>Error</Text>;
  }

  if (status === "loading" && fetchStatus !== "idle") {
    return <Text>Loading...</Text>;
  }

  if (location.length === 0) {
    return (
      <View>
        <Text>Search for a location to see the weather</Text>
      </View>
    );
  }

  return (
    <View className="flex-row bg-red-100 justify-between">
      <Text className="text-4xl">{data.name}</Text>
      <MaterialCommunityIcons name="weather-rainy" size={100} />
    </View>
  );
}

export default TodayWeather;
