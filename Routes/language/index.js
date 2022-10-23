const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();


router.get("/",(req,res)=>{
    conn.query("SELECT original_language,count(original_language) as movie_count from movie GROUP BY original_language;",(err,result)=>{
                if(err) throw err;
                // console.log(result);
                res.send(result)

    });
})

module.exports = router;