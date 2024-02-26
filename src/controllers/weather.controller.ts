import { NextFunction, Request, Response } from "express";

import { WeatherPresenter } from "../presenters/weather.presenter";
import { weatherService } from "../services/weather.service";
import { IQuery } from "../types/query.type";

class WeatherController {
  public async getCurrentWeather(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const currentWeather = await weatherService.getCurrentWeather(
        req.query as IQuery,
      );
      res.json({ data: WeatherPresenter.weatherToResponse(currentWeather) });
    } catch (e) {
      next(e);
    }
  }

  public async getFiveDayThreeHourForecast(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const forecast = await weatherService.getFiveDayThreeHourForecast(
        req.query as IQuery,
      );
      res.json({ date: WeatherPresenter.forecastToResponse(forecast) });
    } catch (e) {
      next(e);
    }
  }

  public async getAirPollutionCurrent(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const airPollution = await weatherService.getAirPollutionCurrent(
        req.query as IQuery,
      );
      res.json(airPollution);
    } catch (e) {
      next(e);
    }
  }

  public async getAirPollutionForecast(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const airPollution = await weatherService.getAirPollutionForecast(
        req.query as IQuery,
      );
      res.json(airPollution);
    } catch (e) {
      next(e);
    }
  }
}

export const weatherController = new WeatherController();
