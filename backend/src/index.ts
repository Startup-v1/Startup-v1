import express, {Request, Response} from "express";
import mongoose, { ConnectOptions } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

/*
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);
*/

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello there!')
})

//FIXME: Replace with db uri
const uri: any = process.env.DB_URL;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
