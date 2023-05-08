const { calendarFormat } = require("moment/moment")
const multer = require("multer")


// multer storage config
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads")
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null, filename)
    }
})

// filter

const filefilter = (req, file, callback) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        callback(null, true)
    } else {
        return callback(new Error("Only .png .jpeg .jpg formatted Allowed"))
    }
}