import mongoose from 'mongoose';
import _ from './dotenv.js'
import app from "./app.js";

mongoose.connect(process.env.DATABASE)

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server is running on port 8000");
  });

