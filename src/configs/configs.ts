import { config } from "dotenv";

config();

export const configs = {
  PORT: process.env.PORT || 5000,
  OPEN_WEATHER_KEY: process.env.OPEN_WEATHER_KEY,
  API_BASE_URL: process.env.API_BASE_URL,
};
