const express = require("express");
const { PORT } = require("./config/constants");
const cors = require("cors");
// const authRouter = require("./routers/auth.js");

const app = express();
app.use(cors());

//Routes

// app.use("/", authRouter);
app.listen(PORT, () => {
  console.log("Up and running on", PORT);
});
