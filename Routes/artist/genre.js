const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

router.get("/:id",(req,res)=>{
    const actor_id = req.params.id;
    conn.query("select count(genre_id) as count_movie,genre_id,genre_name from movie_genre_mapping mgm INNER JOIN movie mv on mgm.movie_id =mv.movie_id INNER JOIN movie_cast_mapping mcm on mv.movie_id = mcm.movie_id where mcm.cast_id="+ actor_id+" GROUP by genre_id ORDER  BY count_movie DESC" ,(err,result)=>{
                if(err) throw err;
                res.send(result)

    });
})

module.exports = router;