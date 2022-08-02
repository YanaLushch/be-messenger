import express from "express";
import cors from "cors";
import morgan from "morgan";
import chatRoutes from "./routes/chatRoutes.js";
import friendsRoutes from "./routes/friendsRoutes.js";

const app = express();
if(process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/chat", chatRoutes);
app.use("/api/v1/friends", friendsRoutes);

export default app;