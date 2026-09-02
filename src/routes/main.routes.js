import UserRoute from "./user.routes.js";
import BookRoute from "./book.routes.js";
import CategoryRoute from "./category.routes.js";

export default function RegisterRoutes(app) {
	console.log(`Registering routes: `);
	app.use("/api/user", UserRoute);
	app.use("/api/book", BookRoute);
	app.use("/api/category", CategoryRoute);
}
