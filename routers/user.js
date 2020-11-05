const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const User = require("../models/").user;
const Items = require("../models/").item;

const router = new Router();

// update personal infor: name, description
router.patch("/user/:userId", authMiddleware, async (req, res) => {
  const updatedUser = await User.findByPk(req.params.userId);
  const { firstName, lastName, phoneNumber, city, country } = req.body;

  await updatedUser.update({ firstName, lastName, phoneNumber, city, country });
  delete updatedUser.dataValues["password"];
  res.status(200).send(updatedUser);
});

module.exports = router;
