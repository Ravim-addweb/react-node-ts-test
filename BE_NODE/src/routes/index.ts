import { Router } from "express";
import controller from "../controllers";
import { validateToken } from "../middlewares";
const router: Router = Router();

/** routes */
router.get("/list", validateToken, controller.fetchAllData);
router.get("/search", validateToken, controller.searchByTags);

export default router;