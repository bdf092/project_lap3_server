const cors = require("cors");
const express = require("express");
const path = require("path");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const mongoose = require("mongoose");
const app = express();

mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connection successful");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
//app.use('/', express.static(path.join(__dirname, '/public')));

// routes
//app.use('/', require('./routers/root'));
app.use("/register", require("./routers/register"));
app.use("/auth", require("./routers/auth"));
app.use("/refresh", require("./routers/refresh"));
app.use("/logout", require("./routers/logout"));

app.use(verifyJWT);
app.use("/quizzes", require("./routers/quizzesRouter"));
app.use("/users", require("./routers/userRouter"));

app.get("/", (req, res) => {
    res.json({
        name: "Revision API",
        description: "Welcome to the revision API",
    });
});

app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (req.accepts("json")) {
        res.json({ error: "404 Not Found" });
    } else {
        res.type("txt").send("404 Not Found");
    }
});
app.use(errorHandler);
module.exports = app;
