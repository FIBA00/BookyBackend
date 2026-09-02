import express from "express";
const CategoryRoute = express.Router();
import { IsLoggedIn } from "../middlewares/auth.middleware.js";

import {
	CreateCategory,
	GetAllCategories,
	UpdateCategory,
} from "../controllers/category.controller.js";

CategoryRoute.get("/", GetAllCategories);
CategoryRoute.post("/", IsLoggedIn, CreateCategory);
CategoryRoute.post("/:id", IsLoggedIn, UpdateCategory);

export default CategoryRoute;
