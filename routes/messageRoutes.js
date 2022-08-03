import express from "express";
import {
  getAllMessages,
  createMessage,
  getMessage,
  editMessage,
  deleteMessage,
} from "../controllers/messageController.js";

const messageRoutes = express.Router();

messageRoutes.route("/").get(getAllMessages).post(createMessage);
messageRoutes
  .route("/:id")
  .get(getMessage)
  .patch(editMessage)
  .delete(deleteMessage);

export default messageRoutes;
