const express = require("express");
const { PORT } = require("./config/constants");
const cors = require("cors");
const authRouter = require("./routers/auth.js");
const itemsRouter = require("./routers/items.js");
const userRouter = require("./routers/user.js");

const app = express();
app.use(cors());
app.use(express.json());
//Routes
app.use("/", authRouter);
app.use("/", itemsRouter);
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log("Up and running on", PORT);
});
