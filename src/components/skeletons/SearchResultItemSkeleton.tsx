import { View } from "react-native";
import LoadingSkeleton from "./Skeleton";

function SearchResultItemSkeleton() {
  return (
    <View className="bg-white justify-center items-start py-3 px-4 bg-white border-b border-b-gray-200">
      <LoadingSkeleton height={14} width={75} />
    </View>
  );
}

export default SearchResultItemSkeleton;
