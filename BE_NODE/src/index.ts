import express from "express";
import cors from 'cors'
import route from "./routes";

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors())
// Express configuration
app.set('port', process.env.PORT || 5000);

app.use('/api/v1', route);

app.get('/', (_req, res) => {
  res.send('API Running');
});

const port: number = app.get('port');
const server: object = app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${port}`)
);

export default server;