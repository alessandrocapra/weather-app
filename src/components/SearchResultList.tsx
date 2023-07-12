import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getLocationList } from "../utils/api";
import { GeocodeLocation } from "../utils/api.type";
import Error from "./Error";
import SearchResultItem from "./SearchResultItem";
import SearchResultListSkeleton from "./skeletons/SearchResultListSkeleton";

type SearchResultListProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

function SearchResultList({ query, setQuery }: SearchResultListProps) {
  const [previousLocationsList, setPreviousLocationsList] = useState<
    GeocodeLocation[]
  >([]);
  const {
    data: locationsList,
    isFetching,
    status,
  } = useQuery({
    queryKey: ["locations", query],
    queryFn: () => getLocationList({ city: query }),
    enabled: query.length >= 3,
  });

  useEffect(() => {
    if (status === "success" && locationsList?.length > 0) {
      setPreviousLocationsList(locationsList);
    }
  }, [locationsList, status]);

  let displayedList =
    locationsList && locationsList.length > 0
      ? locationsList
      : previousLocationsList;

  if (status === "error") {
    return <Error message="Cannot load locations. Please try again later" />;
  }

  if (query.length >= 3 && isFetching) {
    // return <Text>Loading...</Text>
    return <SearchResultListSkeleton />;
  }

  return (
    <>
      {displayedList && query.length > 0 && (
        <FlatList
          accessibilityLabel="search result list"
          data={locationsList}
          className="absolute top-14 left-0 right-0 rounded-md rounded-t-none shadow-sm"
          renderItem={({ item }) => (
            <SearchResultItem locationResult={item} setQuery={setQuery} />
          )}
          keyboardShouldPersistTaps="always"
        />
      )}
    </>
  );
}

export default SearchResultList;
