import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";

import { configs } from "./configs/configs";
import { ApiError } from "./errors/api.error";
import { weatherRouter } from "./routers/weather.router";
import * as swaggerUi from "swagger-ui-express"
import * as swaggerDocument from "./unils/swagger.json";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/weather", weatherRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((error: ApiError, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;

  res.status(status).json({
    message: error.message,
    status: error.status,
  });
});

app.listen(configs.PORT, async () => {
  console.log(`has started ${configs.PORT}`);
});
