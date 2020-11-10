const { Router } = require("express");
const Items = require("../models/").item;

const router = new Router();

//test endpoint
router.get("/ppp", (req, res) => {
  res.status(200).send("lol, much fun");
});

//get items by city
router.get("/items/:city", async (req, res) => {
  const city = req.params.city;
  console.log(city);
  try {
    const data = await Items.findAll({
      where: {
        city,
      },
    });
    if (!data.length) {
      res.status(404).send({ message: "No results based on the city name" });
      return;
    }
    console.log(data);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
