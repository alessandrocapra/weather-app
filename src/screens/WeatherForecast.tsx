import { useEffect, useState } from "react";
import { Text, View } from "react-native";

function WeatherForecast() {
  const [forecast, setForecast] = useState<any>();

  useEffect(() => {
    async function getForecast() {
      try {
        const response = await fetch(
          // `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${process.env.WEATHER_API_KEY}`
          `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=6019bd99eb84923645be2ba229c5a99a`
        );
        const data = response.json();
        console.log(data);

        setForecast(data);
      } catch (error) {
        console.log(error);
      }
    }

    getForecast();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-red-200">
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{JSON.stringify(forecast)}</Text>
    </View>
  );
}

export default WeatherForecast;
