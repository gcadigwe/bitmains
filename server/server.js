const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

//connect mongodb
mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://bitmain:salzkid24@cluster0.8ppld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

//routes middleware
fs.readdirSync("./routes").map((r) => {
  app.use("/api", require("./routes/" + r));
});

//middlewares
app.use(cors());
app.use(morgan("dev"));

app.listen(8000, () => {
  console.log("app is running on port 8000");
});
