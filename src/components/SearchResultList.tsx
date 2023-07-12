import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { FlatList } from "react-native";
import { getLocationList } from "../utils/api";
import Error from "./Error";
import SearchResultItem from "./SearchResultItem";

type SearchResultListProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

function SearchResultList({ query, setQuery }: SearchResultListProps) {
  const { data: locationsList, status } = useQuery({
    queryKey: ["locations", query],
    queryFn: () => getLocationList({ city: query }),
    enabled: query.length >= 3,
  });

  if (status === "error") {
    return <Error message="Cannot load locations. Please try again later" />;
  }

  return (
    <>
      {locationsList && query.length > 0 && (
        <FlatList
          data={locationsList}
          className="absolute top-14 left-0 right-0 rounded-md rounded-t-none shadow-sm"
          renderItem={({ item }) => (
            <SearchResultItem locationResult={item} setQuery={setQuery} />
          )}
        />
      )}
    </>
  );
}

export default SearchResultList;
