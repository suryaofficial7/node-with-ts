//? ----All Imports-----------------------------------------------------------------------------------------
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"; // for hiding data Keys

//? ------All configurations---------------------------------------------------------------------------------------
dotenv.config();

//? -------All initializations--------------------------------------------------------------------------------------
const app: Express = express();
const PORT: any = process.env.PORT;



app.get("/api/v1/user/all", (req: Request, res: Response): void => {
  res.status(200).json({
    userId: "ABC123",
    email: "User1@example.com",
  });
});

app.listen(PORT, () => {
  console.log(`Running on port - http://localhost:${PORT} `);
});
