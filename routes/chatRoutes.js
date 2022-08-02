import express from "express";
import {
  getAllChatMessages,
  createChatMessage,
  getChatMessage,
  editChatMessage,
  deleteChatMessage,
} from "../controllers/chatController.js";
import checkBody from "../middlewares/checkBody.js";

const chatRoutes = express.Router();

chatRoutes.route("/").get(getAllChatMessages).post(checkBody, createChatMessage);
chatRoutes
  .route("/:id")
  .get(getChatMessage)
  .patch(editChatMessage)
  .delete(deleteChatMessage);

export default chatRoutes;
