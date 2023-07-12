import { View } from "react-native";
import LoadingSkeleton from "./Skeleton";

function DailyForecastItemSkeleton() {
  return (
    <View className="flex-row justify-between items-center py-2">
      <LoadingSkeleton height={25} width={100} />
      <View className="flex-row gap-6">
        <LoadingSkeleton height={25} width={25} rounded />
        <LoadingSkeleton height={25} width={70} />
      </View>
    </View>
  );
}

export default DailyForecastItemSkeleton;
