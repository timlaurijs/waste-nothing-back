const { Router } = require("express");
const Items = require("../models/").item;

const router = new Router();

//test endpoint
router.get("/ppp", (req, res) => {
  res.status(200).send("lol, much fun");
});

//get items by city
router.get("/items/:queryType/:query", async (req, res) => {
  const queryType = req.params.queryType;
  const query = req.params.query;
  let data;
  try {
    if (queryType === "city") {
      data = await Items.findAll({
        where: {
          city: query,
        },
      });
    } else if (queryType === "country") {
      data = await Items.findAll({
        where: {
          country: query,
        },
      });
    } else if (queryType === "title") {
      data = await Items.findAll({
        where: {
          title: query,
        },
      });
    }
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
