import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Pressable, SafeAreaView, Text, View } from "react-native";
import { getCurrentWeather } from "../utils/api";
import FiveDaysForecastList from "../components/FiveDaysForecastList";
import SearchLocation from "../components/SearchLocation";
import TodayWeather from "../components/TodayWeather";

function WeatherForecast() {
  const [location, setLocation] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const {
    data: currentWeather,
    status: currentWeatherStatus,
    error: currentWeatherError,
  } = useQuery({
    queryKey: ["current_weather", location],
    queryFn: () => getCurrentWeather({ city: location }),
    enabled: shouldFetch,
  });

  return (
    <SafeAreaView>
      <View className="p-4">
        <SearchLocation
          location={location}
          setLocation={setLocation}
          setShouldFetchLocation={setShouldFetch}
        />
        <View>
          <TodayWeather location={location} shouldFetch={shouldFetch} />
          <FiveDaysForecastList currentLocation={currentWeather} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WeatherForecast;
