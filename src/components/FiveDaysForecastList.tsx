import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { getForecast } from "../utils/api";
import DayForecastItem from "./DayForecastItem";

type FiveDaysForecastListProps = {
  currentLocation: CurrentWeatherResponse | undefined;
};

type ForecastListSort = "asc" | "desc";

const processData = (forecastIntervals: ForecastEntry[]) => {
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
};

function FiveDaysForecastList({ currentLocation }: FiveDaysForecastListProps) {
  const [order, setOrder] = useState<ForecastListSort>("desc");
  const { data, status, fetchStatus, error } = useQuery({
    queryKey: ["forecast", currentLocation?.name],
    queryFn: () =>
      getForecast({
        lat: currentLocation!.coord.lat,
        lon: currentLocation!.coord.lon,
      }),
    enabled: currentLocation != null,
  });

  const forecastIntervals = data?.list ?? [];

  const dailyForecasts = useMemo(
    () => processData(forecastIntervals),
    [forecastIntervals]
  );

  const sortedDailyForecasts = useMemo(() => {
    return [...dailyForecasts].sort((a, b) =>
      order === "desc" ? a.dt - b.dt : b.dt - a.dt
    );
  }, [dailyForecasts, order]);

  if (status === "error") {
    return <Text>{`Error: ${error}`}</Text>;
  }

  if (status === "loading" && fetchStatus !== "idle") {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {data && (
        <>
          <Button title="Toggle" onPress={handleToggleOrder} />
          <FlatList
            data={sortedDailyForecasts}
            renderItem={({ item }) => <DayForecastItem item={item} />}
            keyExtractor={(item) => item.dt_txt}
            extraData={order}
          />
        </>
      )}
    </View>
  );

  function handleToggleOrder() {
    setOrder((currentOrder) => (currentOrder === "asc" ? "desc" : "asc"));
  }
}

export default FiveDaysForecastList;
