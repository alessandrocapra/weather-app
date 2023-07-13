import { Image, Text, View } from "react-native";
import { getDayNameFromDate } from "../utils/dates";
import { SummaryForecastDay } from "../utils/helpers";
import { formatTemperature } from "../utils/strings";

type DayForecastItemProps = {
  item: SummaryForecastDay;
};

function DayForecastItem({ item }: DayForecastItemProps) {
  return (
    <View className="px-4 flex-row items-center border-b border-b-gray-100">
      <Text className="text-lg flex-1">{getDayNameFromDate(item.date)}</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${item.mostFrequentWeatherIcon}@2x.png`,
        }}
        style={{ width: 60, height: 60 }}
        className="mr-4"
      />
      <Text className="text-lg">{`${formatTemperature(item.temp_min)} / ${formatTemperature(
        item.temp_max
      )}`}</Text>
    </View>
  );
}
export default DayForecastItem;
