import { Image, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../utils/api";
import { useSelector } from "react-redux";
import { selectLocation } from "../redux/location/locationSelector";
import { formatTemperature } from "../utils/strings";
import TodayWeatherSkeleton from "./skeletons/TodayWeatherSkeleton";
import Error from "./Error";

function TodayWeather() {
  const location = useSelector(selectLocation);

  const { data, status } = useQuery({
    queryKey: ["current_weather", location],
    // using the English name to avoid issues with Arabic entries
    queryFn: () =>
      getCurrentWeather({ city: location.local_names["en"] ?? location.name }),
  });

  if (status === "error") {
    return (
      <Error message="Could not retrieve the current weather for the selected location, please try another one." />
    );
  }

  if (status === "loading") {
    return <TodayWeatherSkeleton />;
  }

  return (
    <>
      <View className="relative flex-col justify-center items-center py-4 mb-4 bg-white rounded-md shadow-sm">
        <Text className="text-5xl font-thin">{data.name}</Text>
        <View className="flex-row items-center">
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            }}
            style={{ width: 130, height: 130 }}
            className="mr-4"
          />
          <Text className="text-8xl">{`${formatTemperature(
            data.main.temp
          )}`}</Text>
        </View>
        <View className="flex-row"></View>
        <Text className="text-xl capitalize text-gray-400">
          {data.weather[0].description}
        </Text>
        <View className="flex-row gap-3">
          <Text className="text-xl">{`Max:${formatTemperature(
            data.main.temp_max
          )}`}</Text>
          <Text className="text-xl">{`Min:${formatTemperature(
            data.main.temp_min
          )}`}</Text>
        </View>
      </View>
    </>
  );
}

export default TodayWeather;
