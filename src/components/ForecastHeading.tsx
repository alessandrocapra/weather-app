import { Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ForecastListSort } from "./FiveDaysForecastList";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { selectLocation } from "../redux/location/locationSelector";

type ForecastHeadingProps = {
  order: ForecastListSort;
  setOrder: Dispatch<SetStateAction<ForecastListSort>>;
};

function ForecastHeading({ order, setOrder }: ForecastHeadingProps) {
  const location = useSelector(selectLocation);

  return (
    <View className="flex-row justify-between items-center">
      <Text className="text-md uppercase text-zinc-400">5 days forecast</Text>
      <Pressable onPress={handleToggleOrder} disabled={!location} className="p-2 bg-white shadow-sm rounded-full">
        <MaterialCommunityIcons
          name={
            order === "asc"
              ? "sort-clock-descending-outline"
              : "sort-clock-ascending-outline"
          }
          size={24}
          color={!location ? "gray" : "black"}
        />
      </Pressable>
    </View>
  );
  function handleToggleOrder() {
    setOrder((currentOrder) => (currentOrder === "asc" ? "desc" : "asc"));
  }
}

export default ForecastHeading;
