const fs = require("fs-extra")

try {
    fs.copySync("src/public/", "dist/public/")
    console.log("####### public folder copied #######")
} catch (error) {
    console.log("####### public folder copy failed! #######: "+error)
}