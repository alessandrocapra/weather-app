import { useQuery } from "@tanstack/react-query";
import { FlatList, Text, View } from "react-native";
import { getLocationList } from "../utils/api";
import SearchResultItem from "./SearchResultItem";

type SearchResultListProps = {
  location: string;
};

function SearchResultList({ location }: SearchResultListProps) {
  const { data: locationsList, fetchStatus, status } = useQuery({
    queryKey: ["locations", location],
    queryFn: () => getLocationList({ city: location }),
    enabled: location.length >= 3,
  });

  if (status === "error") {
    return <Text>Cannot load locations. Please try again later</Text>;
  }

  if (status === "loading" && fetchStatus !== "idle") {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="absolute top-12 w-full">
      {locationsList && (
        <FlatList
          data={locationsList}
          renderItem={({ item }) => <SearchResultItem locationResult={item} />}
        />
      )}
    </View>
  );
}

export default SearchResultList;
