const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // Serve static files

// Setup multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/GodTreningDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Define a schema and model
const mediaPostSchema = new mongoose.Schema({
    headline: String,
    mediaText: String,
    image: String, // Storing image path or URL
    createdAt: { type: Date, default: Date.now }
}, { collection: 'mediaPost' });

const MediaPost = mongoose.model('MediaPost', mediaPostSchema);

// Define route for posting new content to DB
app.post('/api/posts', upload.single('image'), async (req, res) => {
    const { headline, mediaText } = req.body;
    const imagePath = req.file ? req.file.path : '';

    const newPost = new MediaPost({
        headline,
        mediaText,
        image: imagePath
    });

    try {
        await newPost.save();
        res.status(201).send(newPost);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Define route for fetching media posts
// Define a route to get all media posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await MediaPost.find().sort({ createdAt: -1 });;
        res.status(200).send(posts);
    } catch (err) {
        res.status(400).send(err);
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});









