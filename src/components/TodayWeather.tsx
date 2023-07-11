import { Image, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../utils/api";
import { useSelector } from "react-redux";
import { selectLocation } from "../redux/location/locationSelector";
import { formatTemperature } from "../utils/strings";

function TodayWeather() {
  const location = useSelector(selectLocation);

  const { data, status } = useQuery({
    queryKey: ["current_weather", location],
    queryFn: () => getCurrentWeather({ city: location.name }),
  });

  if (status === "error") {
    return <Text>Error</Text>;
  }

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="relative flex-col justify-center items-center py-8">
      <Text className="text-4xl ">{data.name}</Text>
      <View className="flex-row items-center">
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          }}
          style={{ width: 150, height: 150 }}
          className="mr-4"
        />
        <Text className="text-8xl">{`${formatTemperature(
          data.main.temp
        )}`}</Text>
      </View>
      <View className="flex-row"></View>
      <Text className="text-xl capitalize">{data.weather[0].description}</Text>
      <View className="flex-row gap-3">
        <Text className="text-xl">{`Max:${formatTemperature(
          data.main.temp_max
        )}`}</Text>
        <Text className="text-xl">{`Min:${formatTemperature(
          data.main.temp_min
        )}`}</Text>
      </View>
    </View>
  );
}

export default TodayWeather;
