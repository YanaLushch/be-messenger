import mongoose from "mongoose";
import _ from "./dotenv.js";
import app from "./app.js";

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is running on port 8000");
});
