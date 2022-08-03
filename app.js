import express from "express";
import cors from "cors";
import morgan from "morgan";
import messageRoutes from "./routes/messageRoutes.js";
import friendsRoutes from "./routes/friendsRoutes.js";

const app = express();
if(process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/messages", messageRoutes);
app.use("/api/v1/friends", friendsRoutes);

export default app;