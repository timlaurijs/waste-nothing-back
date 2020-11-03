const express = require("express");
const { PORT } = require("./config/constants");
const cors = require("cors");
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log("Up and running on", PORT);
});
