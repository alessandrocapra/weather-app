import { SafeAreaView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import FiveDaysForecastList from "../components/FiveDaysForecastList";
import SearchLocation from "../components/SearchLocation";
import TodayWeather from "../components/TodayWeather";
import { selectLocation } from "../redux/location/locationSelector";

function WeatherForecast() {
  const location = useSelector(selectLocation);

  return (
    <SafeAreaView>
      <View className="p-4 h-full">
        <SearchLocation />
        {location.name !== "" ? (
          <>
            <TodayWeather />
            <FiveDaysForecastList />
          </>
        ) : (
          <View className="flex-col flex-1 justify-center items-center">
            <Text className="text-3xl">Placeholder image</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default WeatherForecast;
