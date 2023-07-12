import { ForecastEntry } from "./api.type";

export type SummaryForecastDay = {
  date: string;
  mostFrequentWeather: string;
  mostFrequentWeatherIcon: string;
  temp_max: number;
  temp_min: number;
};

type WeatherByDay = {
  [date: string]: {
    temp_min: number;
    temp_max: number;
    weather: { [desc: string]: number };
    weatherIcon: { [desc: string]: string };
  };
};

export function parseWeatherData(data: ForecastEntry[]): SummaryForecastDay[] {
  const today = new Date().toISOString().split("T")[0];

  const weatherByDay: WeatherByDay = data.reduce((acc: WeatherByDay, item) => {
    const date = new Date(item.dt * 1000).toISOString().split("T")[0];

    // Ignore today's weather data
    if (date === today) return acc;

    if (!acc[date]) {
      acc[date] = {
        temp_min: Infinity,
        temp_max: -Infinity,
        weather: {},
        weatherIcon: {},
      };
    }
    acc[date].temp_min = Math.min(acc[date].temp_min, item.main.temp_min);
    acc[date].temp_max = Math.max(acc[date].temp_max, item.main.temp_max);
    const weatherDescription = item.weather[0].description;
    const weatherIcon = item.weather[0].icon;
    acc[date].weather[weatherDescription] =
      (acc[date].weather[weatherDescription] || 0) + 1;
    acc[date].weatherIcon[weatherDescription] = weatherIcon;
    return acc;
  }, {});

  return Object.keys(weatherByDay).map((date) => {
    const dayWeather = weatherByDay[date];
    const mostFrequentWeatherDescription = Object.entries(
      dayWeather.weather
    ).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
    const mostFrequentWeatherIcon =
      dayWeather.weatherIcon[mostFrequentWeatherDescription];
    return {
      date,
      temp_min: dayWeather.temp_min,
      temp_max: dayWeather.temp_max,
      mostFrequentWeather: mostFrequentWeatherDescription,
      // will only heep the day icons (with the d) instead of the night one, in case they are picked
      mostFrequentWeatherIcon: mostFrequentWeatherIcon.replace(
        "n",
        "d"
      ) as string,
    };
  });
}
