import { rest } from "msw";
import {
  CURRENT_WEATHER_BASE_URL,
  FORECAST_BASE_URL,
  GEO_BASE_URL,
} from "../utils/api";

export const handlers = [
  rest.get(CURRENT_WEATHER_BASE_URL, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: "ok",
      })
    );
  }),
  rest.get(FORECAST_BASE_URL, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: "ok",
      })
    );
  }),
  rest.get(GEO_BASE_URL, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: "ok",
      })
    );
  }),
];
