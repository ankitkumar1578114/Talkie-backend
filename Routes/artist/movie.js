const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

router.get("/:id",(req,res)=>{
    const actor_id = req.params.id;
    conn.query("Select mv.*,YEAR(mv.release_date) as release_year from movie mv INNER JOIN movie_cast_mapping mcm ON mv.movie_id=mcm.movie_id where mcm.cast_id=" + actor_id ,(err,result)=>{
                if(err) throw err;
                res.send(result)

    });
})

module.exports = router;