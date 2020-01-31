const dotenv = require("dotenv")
const dotenvConfig = dotenv.config({path: "env/.env"})
if(dotenvConfig.error) {
    throw dotenvConfig.error

} else {
    console.log("DOT_ENV_DATA", dotenvConfig.parsed)
}
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require("cors")
const compression = require("compression")
const helmet = require("helmet");

import path from "path"
import {PORT} from "../src/utils/Constants"

////middlewares start
app.use(cookieParser(process.env.COOKIES_SECRET_KEY));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(compression());
app.use(helmet())
// set static folder for generated css and front js files
app.use('/public', express.static(path.resolve(__dirname, 'public')))
console.log("PUB_DIR", path.resolve(__dirname, 'public'))

//app.use("*", auth)

////middlewares end

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log("App listening on port "+PORT)
})