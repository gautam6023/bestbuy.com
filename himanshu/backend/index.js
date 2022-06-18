require('dotenv').config();
const express = require("express");

const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
//database
connection();
//middlware

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
  }));
//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes)


const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("server started")
})