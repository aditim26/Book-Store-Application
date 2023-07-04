const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book_routes");
const cors = require('cors');
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use('/books', router);

mongoose.connect("mongodb+srv://admin:hello@cluster0.esqyvmb.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("database connected"))
    .then(() => {
        app.listen(5000)
    }).catch((err) => console.log(err));

// user id: admin
// password: hello