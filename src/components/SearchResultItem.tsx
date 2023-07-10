import { Dispatch, SetStateAction } from "react";
import { Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import { setLocation } from "../redux/location/locationSlice";

type SearchResultItemProps = {
  locationResult: GeocodeLocation;
  setQuery: Dispatch<SetStateAction<string>>;
};

function SearchResultItem({ locationResult, setQuery }: SearchResultItemProps) {
  const dispatch = useDispatch();

  const { state, name, country } = locationResult;

  return (
    <Pressable
      onPress={handleSearchResultItemPress}
      className="p-4 bg-white border-b border-b-gray-500"
    >
      <Text>{`${name} (${state}, ${country})`}</Text>
    </Pressable>
  );

  function handleSearchResultItemPress() {
    dispatch(setLocation(locationResult));
    setQuery("");
  }
}

export default SearchResultItem;
