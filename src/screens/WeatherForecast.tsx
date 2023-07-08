import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { getCurrentWeather } from "../utils/api";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FiveDaysForecastList from "../components/FiveDaysForecastList";

function WeatherForecast() {
  const [city, setCity] = useState<string>();
  const [shouldFetch, setShouldFetch] = useState(false);
  const {
    data: currentWeather,
    status: currentWeatherStatus,
    error: currentWeatherError,
  } = useQuery({
    queryKey: ["current_weather", city],
    queryFn: () => getCurrentWeather({ city }),
    enabled: shouldFetch,
  });

  return (
    <SafeAreaView>
      <View className="p-4">
        <View className="flex-row relative">
          <TextInput
            value={city}
            onChangeText={handleLocationChange}
            placeholder="Type city name..."
            className="h-12 flex-1 border border-gray-500 rounded px-4 pr-12 "
          />
          {city && (
            <Pressable
              onPress={handleResetText}
              className="absolute right-0 bottom-0 top-0 p-3"
            >
              <Ionicons name="close-circle-outline" size={20} />
            </Pressable>
          )}
        </View>
        <Button title="Search" onPress={() => setShouldFetch(true)} />
        {shouldFetch && currentWeatherStatus === "error" && (
          <Text>{`Error: ${currentWeatherError}`}</Text>
        )}
        {/*shouldFetch && status === "loading" && <Text>Loading...</Text>*/}
        {currentWeatherStatus === "success" && (
          <View>
            <View className="flex-row bg-red-100 justify-between">
              <Text className="text-4xl">{currentWeather.name}</Text>
              <MaterialCommunityIcons name="weather-rainy" size={100} />
            </View>
            <Text>Forecast</Text>
            <FiveDaysForecastList currentLocation={currentWeather} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );

  function handleResetText() {
    setCity("");
  }

  function handleLocationChange(value: string) {
    setCity(value);
    setShouldFetch(false);
  }
}

export default WeatherForecast;
