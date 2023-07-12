import { SafeAreaView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import FiveDaysForecastList from "../components/FiveDaysForecastList";
import SearchLocation from "../components/SearchLocation";
import TodayWeather from "../components/TodayWeather";
import WelcomeMessage from "../components/WelcomeMessage";
import { selectLocation } from "../redux/location/locationSelector";

function WeatherForecast() {
  const location = useSelector(selectLocation);
  const isLocationDefined = location.name !== "";

  return (
    <SafeAreaView>
      <View className="p-4 h-full">
        <SearchLocation />
        {isLocationDefined ? (
          <>
            <TodayWeather />
            <FiveDaysForecastList />
          </>
        ) : (
          <WelcomeMessage />
        )}
      </View>
    </SafeAreaView>
  );
}

export default WeatherForecast;
