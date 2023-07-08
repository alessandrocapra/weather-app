import { Text, View } from "react-native";
import { convertEpochToReadableDate } from "../utils/dates";

type DayForecastItemProps = {
  item: ForecastEntry;
};

function DayForecastItem({ item }: DayForecastItemProps) {
  return (
    <View className="p-4">
      <Text>{convertEpochToReadableDate(item.dt)}</Text>
      <Text>{`${item.main.temp}C`}</Text>
      <Text>{`${item.main.feels_like}C`}</Text>
    </View>
  );
}
export default DayForecastItem;
