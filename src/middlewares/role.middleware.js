const IsAdmin = function (req, res, next) {
	if (req.user.role !== "admin") {
		return res.status(403).json({
			message: " Access Denied admins only",
		});
	}
	next();
};
export default IsAdmin;
