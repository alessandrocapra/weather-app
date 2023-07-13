import {
  CurrentWeatherResponse,
  ForecastResponse,
  GeocodeLocation,
} from "./api.type";

export const mockCurrentWeatherResponse: CurrentWeatherResponse = {
  coord: {
    lon: -0.1257,
    lat: 51.5085,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 15,
    feels_like: 13.49,
    temp_min: 13.59,
    temp_max: 16.14,
    pressure: 1018,
    humidity: 71,
  },
  visibility: 10000,
  wind: {
    speed: 5.66,
    deg: 220,
    gust: 1.18,
  },
  clouds: {
    all: 90,
  },
  dt: 1648474686,
  sys: {
    type: 2,
    id: 2019646,
    country: "GB",
    sunrise: 1648439098,
    sunset: 1648488677,
  },
  timezone: 3600,
  id: 2643743,
  name: "London",
  cod: 200,
};

export const mockForecastResponse: ForecastResponse = {
  cod: "200",
  message: 0,
  cnt: 1,
  list: [
    {
      dt: 1625760000,
      main: {
        temp: 20,
        feels_like: 21,
        temp_min: 18,
        temp_max: 22,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 80,
        temp_kf: 1,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 4.12,
        deg: 322,
        gust: 5.36,
      },
      visibility: 10000,
      pop: 0.0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-12 12:00:00",
    },
  ],
  city: {
    id: 2643743,
    name: "London",
    coord: {
      lat: 51.5072,
      lon: -0.1276,
    },
    country: "GB",
    population: 8787892,
    timezone: 0,
    sunrise: 1625718264,
    sunset: 1625775529,
  },
};

export const mockGeocodingResponse: GeocodeLocation[] = [
  {
    name: "London",
    local_names: {
      en: "London",
      ru: "Лондон",
      ar: "لندن",
    },
    lat: 51.5073219,
    lon: -0.1276474,
    country: "GB",
    state: "England",
  },
  {
    name: "City of London",
    local_names: {
      en: "City of London",
      fr: "Cité de Londres",
      es: "City de Londres",
    },
    lat: 51.5156177,
    lon: -0.0919983,
    country: "GB",
    state: "England",
  },
  {
    name: "London",
    local_names: {
      en: "London",
      ko: "런던",
      ja: "ロンドン",
    },
    lat: 42.9832406,
    lon: -81.243372,
    country: "CA",
    state: "Ontario",
  },
  {
    name: "Chelsea",
    local_names: {
      en: "Chelsea",
      ru: "Челси",
      fr: "Chelsea",
    },
    lat: 51.4875167,
    lon: -0.1687007,
    country: "GB",
    state: "England",
  },
  {
    name: "London",
    local_names: {
      en: "London",
      es: "Londres",
      fr: "Londres",
    },
    lat: 37.1289771,
    lon: -84.0832646,
    country: "US",
    state: "Kentucky",
  },
];
