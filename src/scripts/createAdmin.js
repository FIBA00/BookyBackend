import mongoose from "../utils/mongoose.util.js";
import UserModel from "../models/user.model.js";
import { DB_URL } from "../configs/database.config.js";
import bcrypt from "bcrypt";

await mongoose.connect(DB_URL);
const hashed = await bcrypt.hash("admin1234567890", 10);

await UserModel.create({
	username: "admin",
	email: "fraolbulti1@gmail.com",
	password: hashed,
	role: "admin",
});
console.log("admin created ");
process.exit();
