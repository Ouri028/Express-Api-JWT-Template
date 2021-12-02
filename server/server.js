const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv").config(path.join(__dirname, "../"));
const app = express();
const PORT = process.env.PORT;
const server = http.createServer(app);
const { TOKEN } = require("../routes/token");
const { ROOT } = require("../routes/root");

app.use(morgan("combined"));
app.use(helmet())
app.use(cors());
app.use(express.json());
app.use("/", TOKEN);
app.use("/", ROOT);


module.exports = {
    Server: () => {     
        server.listen(PORT, () => console.info(`[EXPRESS] Running on port ${PORT}`));
    }
}