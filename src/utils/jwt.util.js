import "../configs/env.config.js";
import jwt from "jsonwebtoken";
const SECRET = process.env.JW_SECRET || process.env.JWT_SECRET;

export function VerifyToken(token) {
	if (!token) {
		console.log("No token is provided", token);
	}
	if (!SECRET) {
		throw new Error(
			"JWT secret is missing. Set JW_SECRET in your .env file.",
		);
	}
	console.log("Token Provided, verifying...", token);
	console.log("The Secret: ", SECRET);
	return jwt.verify(token, SECRET);
}
