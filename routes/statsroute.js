import express from "express"
import { barController, lineController, statController } from "../controllers/statsDashBoard.js";
import { isAdmin } from "../middleware/authMiddleware.js";

const  route =express.Router()

//route
route.get("/stats",statController);


route.get("/bar",barController)

route.get("/line",lineController)



export default route