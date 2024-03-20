import express, {Request, Response} from "express";
import mongoose, { ConnectOptions } from "mongoose";

const app = express();
const port = process.env.PORT || 3000;

//FIXME: Replace with db uri
const dbUri = "test";

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
