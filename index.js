const express = require("express");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");

mongoose
  .connect(
    "mongodb+srv://tepsurkaev:SgTrNSS_2003@cluster0.neogw.mongodb.net/blog",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connect to mongoDB server");
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
