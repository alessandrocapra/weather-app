import { View } from "react-native";
import Skeleton from "./Skeleton";

function DailyForecastItemSkeleton() {
  return (
    <View className="flex-row justify-between items-center py-2">
      <Skeleton height={25} width={100} />
      <View className="flex-row gap-6">
        <Skeleton height={25} width={25} rounded />
        <Skeleton height={25} width={70} />
      </View>
    </View>
  );
}

export default DailyForecastItemSkeleton;
