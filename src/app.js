"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const eslint_plugin_1 = require("@typescript-eslint/eslint-plugin");
const weather_router_1 = require("./routers/weather.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_fileupload_1.default)());
app.use("/weather", weather_router_1.weatherRouter);
app.listen(eslint_plugin_1.configs.PORT, () => {
    console.log(`Server has started on port ${eslint_plugin_1.configs.PORT}`);
});
