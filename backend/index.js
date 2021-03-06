const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongonDB Connected!");
    })
    .catch((err) => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.get('/', (req, res) => { res.send('Backend is working!')})

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!")
});