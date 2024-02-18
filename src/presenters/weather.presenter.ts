import { IWeatherData } from "../types/weather.type";
import {IForecastResponse} from "../types/forecast.type";

export class WeatherPresenter {
  public static weatherToResponse(weather: IWeatherData) {
    return {
      coord: weather.coord,
      weather: weather.weather.map(item => ({ main: item.main, description: item.description })),
      main: {
        temp: weather.main.temp,
        feels_like: weather.main.feels_like,
        humidity: weather.main.humidity
      },
      wind: weather.wind,
      clouds: weather.clouds,
      sys: {
        country: weather.sys.country,
        sunrise: weather.sys.sunrise,
        sunset: weather.sys.sunset
      },
      name: weather.name
    };
  }

  public static forecastToResponse(forecast: IForecastResponse) {
    return {
      city: {
        name: forecast.city.name,
        country: forecast.city.country
      },
      forecast: forecast.list.map(item => ({
        datetime: new Date(item.dt * 1000),
        temperature: item.main.temp,
        feels_like: item.main.feels_like,
        humidity: item.main.humidity,
        weather: {
          main: item.weather[0].main,
          description: item.weather[0].description,
          icon: item.weather[0].icon
        },
        wind: {
          speed: item.wind.speed,
          deg: item.wind.deg
        }
      }))
    };
  }
}