const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
dotenv.config();

//.env variables
const MONGO_URI = process.env.MONGO_URI;
const port = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET;
const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;
// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json()); //Not sure if this is needed
app.use("/uploads", express.static("uploads")); // Serve static files

// Setup multer for file uploads
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage });

// Connect to MongoDB with retry every 5s if failed.
const connectWithRetry = () => {
	mongoose
		.connect(MONGO_URI, {
			// useNewUrlParser: true, These two lines give deprecated warning, seems to work fine without.
			// useUnifiedTopology: true
		})
		.then(() => {
			console.log("Connected to MongoDB");
		})
		.catch((err) => {
			console.error("Failed to connect to MongoDB, retrying...", err);
			setTimeout(connectWithRetry, 5000); // Retry every 5 seconds
		});
};
//Run connect func
connectWithRetry();

// Define a schema and model
const mediaPostSchema = new mongoose.Schema(
	{
		headline: String,
		mediaText: String,
		image: String, // Storing image path or URL
		video: String,
		createdAt: { type: Date, default: Date.now },
	},
	{ collection: "mediaPost" }
);

const MediaPost = mongoose.model("MediaPost", mediaPostSchema);

// Define route for posting new content to DB
app.post(
	"/api/posts",
	upload.fields([
		{ name: "image", maxCount: 1 },
		{ name: "video", maxCount: 1 },
	]),
	async (req, res) => {
		const { headline, mediaText } = req.body;
		const imagePath = req.files.image ? req.files.image[0].path : "";
		const videoPath = req.files.video ? req.files.video[0].path : "";

		// const imagePath = req.file ? req.file.path : "";
		// const videoPath = req.file ? req.file.path : "";

		const newPost = new MediaPost({
			headline,
			mediaText,
			image: imagePath,
			video: videoPath,
		});

		try {
			await newPost.save();
			res.status(201).send(newPost);
		} catch (err) {
			res.status(400).send(err);
		}
	}
);

// Define route for fetching media posts
//Show most recent media post at the top
app.get("/api/posts", async (req, res) => {
	try {
		const posts = await MediaPost.find().sort({ createdAt: -1 });
		res.status(200).send(posts);
	} catch (err) {
		res.status(400).send(err);
	}
});

//Admin login
app.post("/api/auth/login", (req, res) => {
	const { username, password } = req.body;

	if (username === adminUsername && password === adminPassword) {
		const token = jwt.sign({ username }, jwtSecret, {
			expiresIn: "1h",
		});
		return res.json({ token });
	} else {
		return res.status(400).json({ msg: "Invalid credentials" });
	}
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
