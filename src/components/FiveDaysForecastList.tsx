import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { selectLocation } from "../redux/location/locationSelector";
import { getForecast } from "../utils/api";
import DayForecastItem from "./DayForecastItem";
import { parseWeatherData } from "../utils/helpers";
import DailyForecastItemSkeleton from "./skeletons/DailyForecastItemSkeleton";
import ForecastHeading from "./ForecastHeading";
import Error from "./Error";

export type ForecastListSort = "asc" | "desc";

function FiveDaysForecastList() {
  const [order, setOrder] = useState<ForecastListSort>("desc");
  const location = useSelector(selectLocation);

  const { data, status } = useQuery({
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
    return (
      <Error message="Could not get the forecast for the selected location, try again later" />
    );
  }

  if (status === "loading") {
    return (
      <>
        <DailyForecastItemSkeleton />
        <DailyForecastItemSkeleton />
        <DailyForecastItemSkeleton />
        <DailyForecastItemSkeleton />
        <DailyForecastItemSkeleton />
      </>
    );
  }

  return (
    <>
      {data && (
        <View>
          <ForecastHeading order={order} setOrder={setOrder} />
          <FlatList
            data={sortedDailyForecasts}
            renderItem={({ item }) => <DayForecastItem item={item} />}
            keyExtractor={(item) => item.date}
            extraData={order}
            className="bg-slate-50 rounded-md shadow-sm mt-4"
          />
        </View>
      )}
    </>
  );
}

export default FiveDaysForecastList;
