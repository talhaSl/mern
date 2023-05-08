const mongoose = require("mongoose")
const db = process.env.MONGO
mongoose.connect(db, {
    // useUnifiedTopogy: true,
    useNewUrlParser: true
}).then(() => console.log("Connected to database")).catch((err) => console.log(err));