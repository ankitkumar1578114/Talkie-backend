const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();
const upcoming = require('./upcoming')

router.post("/:id",(req,res)=>{
    var body_data= req.body; 

    // console.log(body_data)

    var title=body_data.title
    var original_title=body_data.original_title
    var budget=body_data.budget
    var google_url=body_data.google_url
    var original_language=body_data.original_language
    var overview=body_data.overview
    var release_date=body_data.release_date
    var runtime=body_data.runtime
    var tagline=body_data.tagline
    

    conn.query("INSERT INTO movie (title,original_title,budget,google_url,original_language,overview,release_date,runtime,tagline) values (?,?,?,?,?,?,?,?,?)",
    [title,original_title,budget,google_url,original_language,overview,release_date,runtime,tagline]
    ,(err,result)=>{
                if(err) throw err;
                res.send(result)
    });

})

router.use("/upcoming",upcoming)

module.exports = router;