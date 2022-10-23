const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

router.get("/:id",(req,res)=>{
    const movie_id = req.params.id;
    conn.query("SELECT cr.* from movie mv INNER JOIN movie_crew_mapping mcrm on mv.movie_id=mcrm.movie_id INNER JOIN crew cr on cr.crew_id=mcrm.crew_id WHERE mv.movie_id= " + movie_id,(err,result)=>{
                if(err) throw err;
                // console.log(result);
                res.send(result)
    });
})

module.exports = router;