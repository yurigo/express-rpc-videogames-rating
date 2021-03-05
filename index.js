require('dotenv').config()

const express = require("express");
const app = express();

const usersRoute = require('./routes/users.route')
const videogameRoute = require('./routes/videogames.route')

const port = process.env.PORT || 3000

// app.use(express.json())
// app.use(express.static("static"))

app.use("/api/users", usersRoute)
app.use("/api/videogames", videogameRoute)

app.use((err, req, res, next) => {
    console.log("error", err)
    res.json(err)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
    console.log(`http://localhost:${port}/api/users/v1/all`)
    console.log(`http://localhost:${port}/api/users/v2/all`)
    console.log(`http://localhost:${port}/api/users/v3/all`)
    console.log(`http://localhost:${port}/api/users/all`)
    console.log(`http://localhost:${port}/api/users/get/3`)
    console.log(`http://localhost:${port}/api/videogames/all`)
    console.log(`http://localhost:${port}/api/videogames/get/3`)
    console.log(`http://localhost:${port}/api/videogames/get/97`)
    console.log(`http://localhost:${port}/api/videogames/load`)
});