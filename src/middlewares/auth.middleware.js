import { VerifyToken } from "../utils/jwt.util.js";

export function IsLoggedIn(req, res, next) {
	const authHeader = req.headers.authorization;

	console.log("Auth Header: ", authHeader);
	if (!authHeader) {
		return res.status(401).json({
			success: false,
			message: "No Token Provided",
		});
	}

	const token = authHeader.split(" ")[1];
	console.log("Auth Token: ", token);
	if (!token) {
		return res.status(401).json({
			success: false,
			message: "Invalid Token Provided",
		});
	}
	try {
		const decoded_token = VerifyToken(token);
		console.log("Decoded token: ", decoded_token);

		req.user = decoded_token;
		return next();
	} catch (error) {
		console.log("Logged in verification failed: ", error);
		return res.status(401).json({
			success: false,
			message: "No Token Provided",
		});
	}
}
