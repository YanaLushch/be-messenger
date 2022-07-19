import express from "express";
import cors from "cors";
import { createRequire } from "module";
import { groupMessages } from "./utils/groupMessages.js";

const app = express();
const require = createRequire(import.meta.url);
const dataMessages = require("./mocks/messages.json");
const dataFriends = require("./mocks/friends.json");

app.use(cors())


app.get("/chat", (req, res) => {
  res.send(JSON.stringify(groupMessages(dataMessages)));
})

app.get("/", (req, res) => {
  res.send(JSON.stringify(dataFriends));
})

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
