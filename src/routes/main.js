import UserRoute from "./user.route.js";
import BookRoute from "./book.route.js";
import CategoryRoute from "./category.route.js";

export default function RegisterRoutes(app) {
	console.log(`Registering routes: `);
	app.use("/api/user", UserRoute);
	app.use("/api/book", BookRoute);
	app.use("/api/category", CategoryRoute);
}
