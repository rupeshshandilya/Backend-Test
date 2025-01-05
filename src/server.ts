import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/database";
import userRouter from "./routes/user.routes";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors({
  origin: ['*'],
  methods: ["POST"],
  credentials: true
}))

app.use(express.json());
app.use("/api/v1", userRouter);

connectDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
