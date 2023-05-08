const User = require("../models/userSchema")
exports.user = async (req, res) => {
    try {
        const users = await User.find();


    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}