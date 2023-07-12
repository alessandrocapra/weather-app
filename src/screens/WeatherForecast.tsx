import { SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import FiveDaysForecastList from "../components/FiveDaysForecastList";
import Heading from "../components/Heading";
import SearchLocation from "../components/SearchLocation";
import TodayWeather from "../components/TodayWeather";
import WelcomeMessage from "../components/WelcomeMessage";
import { selectLocation } from "../redux/location/locationSelector";

function WeatherForecast() {
  const location = useSelector(selectLocation);
  const isLocationDefined = location.name !== "";

  return (
    <SafeAreaView className="bg-slate-100">
      <View className="p-4 h-full">
        <Heading>Weather</Heading>
        <SearchLocation />
        {isLocationDefined ? (
          <View className="pt-4">
            <TodayWeather />
            <FiveDaysForecastList />
          </View>
        ) : (
          <WelcomeMessage />
        )}
      </View>
    </SafeAreaView>
  );
}

export default WeatherForecast;
