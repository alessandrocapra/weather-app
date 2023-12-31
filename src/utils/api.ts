import {
  CurrentWeatherResponse,
  ForecastResponse,
  GeocodeLocation,
} from "./api.type";
import Constants from "expo-constants";
import axios from "axios";

export const CURRENT_WEATHER_BASE_URL =
  "http://api.openweathermap.org/data/2.5/weather";
export const FORECAST_BASE_URL =
  "http://api.openweathermap.org/data/2.5/forecast";
export const GEO_BASE_URL = "http://api.openweathermap.org/geo/1.0/direct";
const API_KEY = Constants.expoConfig?.extra?.WEATHER_API_KEY;

type GetCurrentWeatherProps = {
  city: string | undefined;
};

type GetForecastProps = {
  lat: number;
  lon: number;
};

function constructURL(baseUrl: string, queryParams: object) {
  const params = new URLSearchParams({
    ...queryParams,
    appid: API_KEY,
  }).toString();

  return `${baseUrl}?${params}`;
}

async function fetchAPI<T>(url: string): Promise<T> {
  const response = await axios.get<T>(url);
  return response.data;
}

export async function getCurrentWeather({
  city = "Utrecht",
}: GetCurrentWeatherProps): Promise<CurrentWeatherResponse> {
  const url = constructURL(CURRENT_WEATHER_BASE_URL, {
    q: city,
    units: "metric",
  });
  return fetchAPI<CurrentWeatherResponse>(url);
}

export async function getForecast({
  lat,
  lon,
}: GetForecastProps): Promise<ForecastResponse> {
  const url = constructURL(FORECAST_BASE_URL, { lat, lon, units: "metric" });
  return fetchAPI<ForecastResponse>(url);
}

export async function getLocationList({
  city,
}: GetCurrentWeatherProps): Promise<GeocodeLocation[]> {
  const url = constructURL(GEO_BASE_URL, { q: city, limit: 5 });
  return fetchAPI<GeocodeLocation[]>(url);
}
