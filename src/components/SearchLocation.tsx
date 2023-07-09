import { Button, Pressable, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Dispatch, SetStateAction } from "react";
import SearchResultList from "./SearchResultList";

type SearchLocationProps = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  setShouldFetchLocation: Dispatch<SetStateAction<boolean>>;
};

function SearchLocation({
  location,
  setLocation,
  setShouldFetchLocation,
}: SearchLocationProps) {
  return (
    <View className="relative">
      <View className="flex-row relative">
        <TextInput
          value={location}
          onChangeText={handleLocationChange}
          placeholder="Type city name..."
          className="h-12 flex-1 border border-gray-500 rounded px-4 pr-12 "
        />
        {location && (
          <Pressable
            onPress={handleResetText}
            className="absolute right-0 bottom-0 top-0 p-3"
          >
            <Ionicons name="close-circle-outline" size={20} />
          </Pressable>
        )}
      </View>
      <Button
        title="Search"
        onPress={() => setShouldFetchLocation(true)}
        disabled={!location.length}
      />
      <SearchResultList location={location} />
    </View>
  );
  function handleLocationChange(value: string) {
    setLocation(value);
    setShouldFetchLocation(false);
  }
  function handleResetText() {
    setLocation("");
    setShouldFetchLocation(false);
  }
}

export default SearchLocation;
