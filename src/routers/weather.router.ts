import { Router } from "express";

import { weatherController } from "../controllers/weather.controller";

const router = Router();

router.get("/", weatherController.getCurrentWeather);

router.get(
  "/fiveDayThreeHourForecast",
  weatherController.getFiveDayThreeHourForecast,
);

router.get("/airPollutionCurrent", weatherController.getAirPollutionCurrent);

router.get("/airPollutionForecast", weatherController.getAirPollutionForecast);

export const weatherRouter = router;
