import axios from "axios";

import { configs } from "../configs/configs";
import { ApiError } from "../errors/api.error";
import { AirQualityResponse } from "../types/airPollution.type";
import { IForecastResponse } from "../types/forecast.type";
import { IQuery } from "../types/query.type";
import { IWeatherData } from "../types/weather.type";

class WeatherService {
  public async getCurrentWeather(query: IQuery): Promise<IWeatherData> {
    try {
      let apiUrl;
      if ("lat" in query && "lon" in query) {
        const { lat, lon, exclude, lang } = query;
        apiUrl = `${configs.API_BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=${exclude}&lang=${lang}&appid=${configs.OPEN_WEATHER_KEY}`;
      } else if ("city" in query) {
        const { city, exclude, lang } = query;
        apiUrl = `${configs.API_BASE_URL}/data/2.5/weather?q=${city}&exclude=${exclude}&lang=${lang}&appid=${configs.OPEN_WEATHER_KEY}`;
      } else {
        throw new Error("Invalid query type");
      }

      const response = await axios.get(apiUrl);
      return response.data;
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async getFiveDayThreeHourForecast(
    query: IQuery,
  ): Promise<IForecastResponse> {
    try {
      let apiUrl;
      if ("lat" in query && "lon" in query) {
        const { lat, lon, lang } = query;
        apiUrl = `${configs.API_BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=${lang}&appid=${configs.OPEN_WEATHER_KEY}`;
      } else if ("city" in query) {
        const { city, lang } = query;
        apiUrl = `${configs.API_BASE_URL}/data/2.5/forecast?q=${city}&lang=${lang}&appid=${configs.OPEN_WEATHER_KEY}`;
      } else {
        throw new Error("Invalid query type");
      }

      const response = await axios.get(apiUrl);
      return response.data;
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async getAirPollutionCurrent(
    query: IQuery,
  ): Promise<AirQualityResponse> {
    try {
      let apiUrl;
      if ("lat" in query && "lon" in query) {
        const { lat, lon } = query;
        apiUrl = `${configs.API_BASE_URL}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${configs.OPEN_WEATHER_KEY}`;
      } else {
        throw new Error("Invalid query type");
      }

      const response = await axios.get(apiUrl);
      return response.data;
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async getAirPollutionForecast(
    query: IQuery,
  ): Promise<AirQualityResponse> {
    try {
      let apiUrl;
      if ("lat" in query && "lon" in query) {
        const { lat, lon } = query;
        apiUrl = `${configs.API_BASE_URL}/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${configs.OPEN_WEATHER_KEY}`;
      } else {
        throw new Error("Invalid query type");
      }

      const response = await axios.get(apiUrl);
      return response.data;
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}

export const weatherService = new WeatherService();
