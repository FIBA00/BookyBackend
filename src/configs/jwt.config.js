import "./env.config.js";
import jwt from "jsonwebtoken";

const SECRET = process.env.JW_SECRET || process.env.JWT_SECRET;
const EXPIRES_IN =
	process.env.JW_EXPIRES_IN || process.env.JWT_EXPIRES_IN || "1d";

export default function GenerateToken(user) {
	if (!SECRET) {
		throw new Error(
			"JWT secret is missing. Set JW_SECRET in your .env file.",
		);
	}
	return jwt.sign(
		{
			id: user._id,
			email: user.email,
			role: user.role,
		},
		SECRET,
		{
			expiresIn: EXPIRES_IN,
		},
	);
}
