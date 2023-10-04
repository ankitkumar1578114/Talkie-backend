const express = require('express');
const app = express();
const movieRouter = require('./Routes/movie')
const artistRouter = require('./Routes/artist')
const languageRouter = require('./Routes/language')
const crewRouter = require('./Routes/crew')
const postRouter = require('./Routes/post')
const searchRouter = require('./Routes/search')

const cors = require('cors')
const bodyParser = require('body-parser') 

app.use(cors());
app.use(bodyParser.json())

app.use("/language",languageRouter);
app.use("/movie",movieRouter);
app.use("/artist",artistRouter);
app.use("/crew",crewRouter);
app.use("/post",postRouter)
app.use("/search",searchRouter)

app.listen(4000,()=>{
    console.log("Backend is Ready")
})