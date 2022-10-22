const express = require('express');
const app = express();
const movieRouter = require('./Routes/movie')

app.use("/movie",movieRouter);


app.listen(3000,()=>{
    console.log("Backend is Ready")
})