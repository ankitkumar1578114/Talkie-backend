const express = require('express');
const app = express();
const movieRouter = require('./Routes/movie')
const artistRouter = require('./Routes/artist')
const languageRouter = require('./Routes/language')
const crewRouter = require('./Routes/crew')
const cors = require('cors')

app.use(cors());
app.use("/language",languageRouter);
app.use("/movie",movieRouter);
app.use("/artist",artistRouter);
app.use("/crew",crewRouter);

app.listen(4000,()=>{
    console.log("Backend is Ready")
})