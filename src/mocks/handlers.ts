import { rest } from "msw";
import {
  CURRENT_WEATHER_BASE_URL,
  FORECAST_BASE_URL,
  GEO_BASE_URL,
} from "../utils/api";
import {
  mockCurrentWeatherResponse,
  mockForecastResponse,
  mockGeocodingResponse,
} from "../utils/api.mocks";
import {
  CurrentWeatherResponse,
  ForecastResponse,
  GeocodeLocation,
} from "../utils/api.type";

export const handlers = [
  rest.get(CURRENT_WEATHER_BASE_URL + "/*", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<CurrentWeatherResponse>(mockCurrentWeatherResponse)
    );
  }),
  rest.get(FORECAST_BASE_URL, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ForecastResponse>(mockForecastResponse)
    );
  }),
  rest.get(GEO_BASE_URL, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<GeocodeLocation[]>(mockGeocodingResponse)
    );
  }),
];
