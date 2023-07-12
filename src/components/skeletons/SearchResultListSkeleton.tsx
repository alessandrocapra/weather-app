import { View } from "react-native";
import SearchResultItemSkeleton from "./SearchResultItemSkeleton";

function SearchResultListSkeleton() {
  return (
    <View className="absolute top-14 left-0 right-0 rounded-md border border-gray-300 ">
      <SearchResultItemSkeleton />
      <SearchResultItemSkeleton />
      <SearchResultItemSkeleton />
      <SearchResultItemSkeleton />
      <SearchResultItemSkeleton />
    </View>
  );
}

export default SearchResultListSkeleton;
