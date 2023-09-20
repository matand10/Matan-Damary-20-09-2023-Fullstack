const express = require("express");
const http = require('http')
const app = express();
const dotenv = require("dotenv");
const sqlConnection = require("./services/db.service")
dotenv.config();

// CORS -
const cors = require("cors");
const corsOptions = {
    origin: "*",
    credentials: true
}

// ROUTES
const cityRoute = require("./api/city/city.routes");
const weatherRoute = require("./api/weather/weather.routes");

// API
app.use(cors(corsOptions))
app.use(express.json());
app.use("/api/weather", weatherRoute);
app.use("/api/city", cityRoute);

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

export {
    express
}