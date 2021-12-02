const { Router } = require("express");
const ROOT = Router();
const auth = require("../middleware/auth");
const config = process.env;

ROOT.get("/", auth, (req, res) => {
    return res.send({
        message: "Hello, World"
    }).status(200);
});

module.exports = {
    ROOT
}