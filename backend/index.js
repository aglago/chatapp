import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import apiRoutes from "./routes/api.routes.js";
import messagesRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./database/connectToMongodb.js";

dotenv.config();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", apiRoutes);
app.use("/api/messages", messagesRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the server to the home route");
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
  connectToMongoDB();
});
