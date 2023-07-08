import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { getForecast } from "../utils/api";
import DayForecastItem from "./DayForecastItem";

type FiveDaysForecastListProps = {
  currentLocation: CurrentWeatherResponse;
};

function FiveDaysForecastList({
  currentLocation: city,
}: FiveDaysForecastListProps) {
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const { data, status, error } = useQuery({
    queryKey: ["forecast", city.name],
    queryFn: () =>
      getForecast({
        // fine to use the ! as long as enabled checks on currentWeather on having a value
        lat: city.coord.lat,
        lon: city.coord.lon,
      }),
  });

  const forecastIntervals = data ? data.list : [];

  const dailyForecasts = useMemo(() => {
    let dailyData = [];
    let lastDate = null;

    for (const forecast of forecastIntervals) {
      const date = new Date(forecast.dt * 1000);
      const forecastDate = date.toISOString().split("T")[0];
      const forecastHour = date.getUTCHours();

      if (forecastDate !== lastDate && forecastHour === 12) {
        dailyData.push(forecast);
        lastDate = forecastDate;
      }
    }

    return dailyData;
  }, [forecastIntervals]);

  const sortedDailyForecasts = useMemo(() => {
    return [...dailyForecasts].sort((a, b) =>
      order === "desc" ? a.dt - b.dt : b.dt - a.dt
    );
  }, [dailyForecasts, order]);

  if (status === "error") {
    return <Text>Error</Text>;
  }

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Button
        title="Toggle"
        onPress={() => {
          if (order === "asc") {
            setOrder("desc");
          } else {
            setOrder("asc");
          }
        }}
      />
      <FlatList
        data={sortedDailyForecasts}
        renderItem={({ item }) => <DayForecastItem item={item} />}
        keyExtractor={(item) => item.dt_txt}
        extraData={order}
      />
    </View>
  );
}

export default FiveDaysForecastList;
