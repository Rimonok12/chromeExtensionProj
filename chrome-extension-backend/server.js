// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // Initialize express app
// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb+srv://rimonok12:7xv92TKA99Veszyh@rimonok12.me8io4a.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

// // Define a simple schema and model for data storage
// const DataSchema = mongoose.Schema({
//     data: String
// });

// const Data = mongoose.model('Data', DataSchema);

// // Define routes
// app.get('/api/data', async (req, res) => {
//     const data = await Data.find();
//     res.json(data);
// });

// app.post('/api/data', async (req, res) => {
//     const newData = new Data(req.body);
//     const savedData = await newData.save();
//     res.json(savedData);
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://rimonok12:7xv92TKA99Veszyh@rimonok12.me8io4a.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Define a simple schema and model for data storage
const DataSchema = mongoose.Schema({
    data: String
});

const Data = mongoose.model('Data', DataSchema);

// Define routes
app.get('/api/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/api/data', async (req, res) => {
    console.log("post")
    try {
        const newData = new Data(req.body);
        const savedData = await newData.save();
        res.json(savedData);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/api/data/:id', async (req, res) => {
        console.log("Delete")
    try {
        const deletedData = await Data.findByIdAndDelete(req.params.id);
        res.json(deletedData);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



