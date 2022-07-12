//express
const express = require("express");
const app = express();
//mongoose
const mongoose = require("mongoose");
//dotenv
const dotenv = require("dotenv");
//user route
const userRoute = require("./routes/user");
//auth route
const authRoute = require("./routes/auth");
//product route
const productRoute = require("./routes/product");
//configure dotenv
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successful"))
  .catch((err) => console.log(err));

//allow app to take json data
app.use(express.json());

//routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log("Backend server running");
});
