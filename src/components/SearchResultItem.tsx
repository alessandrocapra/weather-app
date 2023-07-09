import { Pressable, Text } from "react-native";

type SearchResultItemProps = {
  locationResult: GeocodeLocation;
};

function SearchResultItem({ locationResult }: SearchResultItemProps) {
  return (
    <Pressable
      onPress={() => console.log("pressed")}
      className="p-4 border-b border-b-gray-500 bg-red-300"
    >
      <Text>{`${locationResult.name} (${locationResult.country})`}</Text>
    </Pressable>
  );
}

export default SearchResultItem;
