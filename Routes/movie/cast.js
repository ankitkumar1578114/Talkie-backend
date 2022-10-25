const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

router.get("/:id",(req,res)=>{
    const movie_id = req.params.id;
    conn.query("Select mv.original_title,art.*,mcm.character_name from movie mv INNER JOIN movie_cast_mapping mcm on mv.movie_id = mcm.movie_id INNER JOIN artist art on mcm.cast_id=art.actor_id where mv.movie_id = " + movie_id,(err,result)=>{
                if(err) throw err;
                // console.log(result);
                res.send(result)

    });
})

module.exports = router;