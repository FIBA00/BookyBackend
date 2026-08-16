import BookModel from "../models/book.model.js";
// import CategoryModel from "../models/book_category.model.js";
import { ResolveCategory } from "../utils/resolver.util.js";

export async function GetAllBooks(req, res) {
	console.log("Getting all books ");
	try {
		const books = await BookModel.find().sort({ createdAt: -1 });
		return res.status(200).json({
			success: true,
			books,
		});
	} catch (error) {
		console.log("Error getting books", error);
		return res.status(500).json({
			success: false,
			message: "An error occurred while fetching books",
			error: error.message,
			books: [],
		});
	}
}

export async function CreateBook(req, res) {
	console.log("Creating  a book: ");
	try {
		const {
			title,
			description,
			author,
			category,
			publishdate,
			pages,
			rating,
			price,
			language,
			publisher,
			posterimage,
		} = req.body;

		if (!title || !author || !publishdate) {
			console.log("there are missing fields");
			res.status(400).json({
				success: false,
				message: "missing fields",
			});
		}
		if (!category) {
			return res.status(400).json({
				success: false,
				message: "Category field is missing!",
			});
		}
		const Category = await ResolveCategory(category, req.user.id);
		if (!Category) {
			return res.status(404).json({
				success: false,
				message: "Category not found. Use a valid category id or name.",
			});
		}

		// extract only filename from the posterimage for database
		// const filename = req.file ? req.file.path.split("/").pop()

		let New_Book = await BookModel.create({
			title,
			description,
			author,
			category: Category._id,
			publishdate,
			pages,
			rating,
			price,
			language,
			publisher,
			posterimage,
		});
		New_Book = await New_Book.populate("category");

		return res.status(201).json({
			success: true,
			message: "Book Created successfully",
			book: New_Book,
		});
	} catch (error) {
		console.log("Error occured while creating a book: ", error);
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
}
