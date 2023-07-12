import { View } from "react-native";
import Skeleton from "./Skeleton";

function TodayWeatherSkeleton() {
  return (
    <View className="flex-col justify-center items-center py-8">
      <Skeleton height={30} width={90} />
      <Skeleton height={100} width={300} />
      <Skeleton height={30} width={90} />
      <Skeleton height={30} width={150} />
    </View>
  );
}

export default TodayWeatherSkeleton;
