const debug = require("debug")("weathermap");

const Koa = require("koa");
const router = require("koa-router")();
const axios = require("axios");
const weatherApi = require("./Weather/WeatherApi");
const cors = require("kcors");

const appId = process.env.APPID || "";
const mapURI =
  process.env.MAP_ENDPOINT || "http://api.openweathermap.org/data/2.5";

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());
const getWeatherData = async (ctx) => {
  const weatherData = await weatherApi();
  ctx.type = "application/json; charset=utf-8";
  ctx.body = weatherData ? weatherData : {};
};
router.get("/api/weather", async (ctx) => {
  const weatherData = await weatherApi();
  ctx.type = "application/json; charset=utf-8";
  ctx.body = weatherData ? weatherData : {};
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
