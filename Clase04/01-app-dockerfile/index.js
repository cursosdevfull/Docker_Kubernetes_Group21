const helmet = require("helmet")
const cors = require("cors")
const express = require("express")
const app = express()

app.use(helmet())

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hola mundo")
})

app.listen(3000, () => console.log("Server is running on port 3000"))