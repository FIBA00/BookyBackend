import express from "express";

const BookRoute = express.Router();

// auth
import { IsLoggedIn } from "../middlewares/auth.middleware.js";
// import IsAdmin from "../middlewares/role.middleware.js";

// controllers
import { GetAllBooks, CreateBook } from "../controllers/book.controller.js";

// routes
BookRoute.post("/", IsLoggedIn, CreateBook);
BookRoute.get("/", GetAllBooks);

export default BookRoute;
