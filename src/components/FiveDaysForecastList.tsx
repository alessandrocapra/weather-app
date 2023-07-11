import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectLocation } from "../redux/location/locationSelector";
import { getForecast } from "../utils/api";
import DayForecastItem from "./DayForecastItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { parseWeatherData } from "../utils/helpers";

type ForecastListSort = "asc" | "desc";

function FiveDaysForecastList() {
  const [order, setOrder] = useState<ForecastListSort>("desc");
  const location = useSelector(selectLocation);

  const { data, status, error } = useQuery({
    queryKey: ["forecast", location],
    queryFn: () =>
      getForecast({
        lat: location.lat,
        lon: location.lon,
      }),
    enabled: location != null,
  });

  const forecastIntervals = data?.list ?? [];

  const dailyForecasts = useMemo(
    () => parseWeatherData(forecastIntervals),
    [forecastIntervals]
  );

  const sortedDailyForecasts = useMemo(() => {
    return [...dailyForecasts].sort((a, b) =>
      order === "desc"
        ? Date.parse(a.date) - Date.parse(b.date)
        : Date.parse(b.date) - Date.parse(a.date)
    );
  }, [dailyForecasts, order]);

  if (status === "error") {
    return <Text>{`Error: ${error}`}</Text>;
  }

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      {data && (
        <>
          <View className="flex-row justify-between items-center">
            <Text className="text-lg uppercase text-zinc-400">
              5 days forecast
            </Text>
            <Pressable onPress={handleToggleOrder}>
              <MaterialCommunityIcons
                name={
                  order === "asc"
                    ? "sort-clock-descending-outline"
                    : "sort-clock-ascending-outline"
                }
                size={32}
              />
            </Pressable>
          </View>
          <FlatList
            data={sortedDailyForecasts}
            renderItem={({ item }) => <DayForecastItem item={item} />}
            keyExtractor={(item) => item.date}
            extraData={order}
          />
        </>
      )}
    </>
  );

  function handleToggleOrder() {
    setOrder((currentOrder) => (currentOrder === "asc" ? "desc" : "asc"));
  }
}

export default FiveDaysForecastList;
