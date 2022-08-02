import express from "express";
import {getAllFriends, getFriend, createFriend, editFriend, deleteFriend} from "../controllers/friendsController.js";

const friendsRoutes = express.Router();
friendsRoutes.route("/").get(getAllFriends).post(createFriend);
friendsRoutes
  .route("/:id")
  .get(getFriend)
  .patch(editFriend)
  .delete(deleteFriend);

export default friendsRoutes;
