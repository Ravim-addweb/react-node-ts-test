import express from "express";
import route from "./routes";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Express configuration
app.set("port", process.env.PORT || 5000);

app.use('/api/v1', route);

app.get("/", (_req, res) => {
  res.send("API Running");
});

const port: number = app.get("port");
const server: object = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;