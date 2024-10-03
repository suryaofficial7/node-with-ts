* app.ts
```
//? ----All Imports-----------------------------------------------------------------------------------------
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"; // for hiding data Keys
import bodyParser from 'body-parser'
import userRouter from './routes/user.route.js'

const app: Express = express();

//? ------All configurations---------------------------------------------------------------------------------------
dotenv.config();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

//? -------All initializations--------------------------------------------------------------------------------------
const PORT: any = process.env.PORT;



app.use("/api/v1/user/",userRouter)

app.listen(PORT, () => {
  console.log(`Running on port - http://localhost:${PORT} `);
});

```

* Routers
```
import  { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controllers/user.controller";

const router:Router = Router()

router.route("/create").post(createUser)
router.route("/:id").get(getUser)
router.route("/:id").put(updateUser)
router.route("/:id").delete(deleteUser)

export default router
```

* Controllers
```
import { Request, Response } from "express";

export const createUser = (req: Request, res: Response): void => {
  res.status(200).json({
    status: true,
    token: "KJgkjbdjfb328746ubgHWuuuxyBs234bH",
  });
};

export const getUser = (req: Request, res: Response): void => {
  res.status(200).json([
    { userID: 1,username: "kdfn@12"    },
    { userID: 2, username: "ksddfn@12" },
  ]);
};

export const updateUser = (req: Request, res: Response): void => {
  res.status(200).json({
    status: true,
    message:"updated Successfully",
    token: "KJgkjbdjfb328746ubgHWuuuxyBs234bH",
  });
};

export const deleteUser = (req: Request, res: Response): void => {
  res.status(200).json({
    status: true,
    message:"Deleted Successfully",
  });
};
```
