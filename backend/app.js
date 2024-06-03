const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
//connect to db
    const dbURI = 'mongodb+srv://mohamedmoataz:test1234@cluster0.p4cn3ff.mongodb.net/task-management?retryWrites=true&w=majority&appName=Cluster0';
    mongoose.connect(dbURI)
        .then((res) => console.log("connected to db"))
        .catch((err) => console.log("error happened : " + err))
    app.use(bodyParser.urlencoded({ extended: true })); // for URL-encoded data


app.use((req, res, next) => {
    console.log(req.path, req.method)
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    next();
})
app.use('/task', require("./routes/task"));
app.listen('7000', () => console.log("running on port 7000"));