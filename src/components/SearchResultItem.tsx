import { Dispatch, SetStateAction } from "react";
import { Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import { setLocation } from "../redux/location/locationSlice";
import { GeocodeLocation } from "../utils/api.type";

type SearchResultItemProps = {
  locationResult: GeocodeLocation;
  setQuery: Dispatch<SetStateAction<string>>;
};

function SearchResultItem({ locationResult, setQuery }: SearchResultItemProps) {
  const dispatch = useDispatch();

  const { state, name, country } = locationResult;
  const locationString = `📍 ${name} ${state ? `(${state},${country})` : `(${country})`
    }`;
  return (
    <Pressable
      accessibilityLabel="press search result"
      onPress={handleSearchResultItemPress}
      className="p-4 bg-white border-b border-b-gray-200"
    >
      <Text accessibilityLabel="search result">{locationString}</Text>
    </Pressable>
  );

  function handleSearchResultItemPress() {
    dispatch(setLocation(locationResult));
    setQuery("");
  }
}

export default SearchResultItem;
