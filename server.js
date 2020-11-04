const express = require("express");
const { PORT } = require("./config/constants");
const cors = require("cors");
const app = express();
const cities = require("all-the-cities");

app.use(cors());

app.listen(PORT, () => {
  const data = cities.filter((city) => city.name.match("Albuquerque"));
  const coordinates = data.find((city) => {
    if (city.name === "Albuquerque") {
      return city.loc;
    }
  });
  console.log("Up and running on", PORT);
  console.log(coordinates);
});
