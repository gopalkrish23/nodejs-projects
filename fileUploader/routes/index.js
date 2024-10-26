const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    const fileTypes = /.jpg|.png/
    const isValidExt = fileTypes.test(path.extname(file.originalname).toLowerCase());
    if(isValidExt)
        return cb(null, true)
    cb("Error: Invalid file type")
}
const uploadedFile = multer({ fileFilter, limits: { fileSize: 1024000 }, storage })

router.post("/", uploadedFile.single("new_file"), (req, res) => {
    console.log("hit the upload middleware ",req.file);
    res.status(200).send("hit upload");
})

module.exports = router;