const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();
const movie = require("./movie")
const list = require("./list")
const search = require("./search")

router.get("/:id",(req,res)=>{
    var actor_id = req.params.id;
    var response_to_send
    conn.query("Select * from artist where id=" + actor_id,(err,result)=>{
                if(err) throw err;
                response_to_send = result
                if(result.length!=0)
                {
                    actor_id = response_to_send[0].actor_id
                    conn.query("Select mv.*,YEAR(mv.release_date) as release_year from movie mv INNER JOIN movie_cast_mapping mcm ON mv.movie_id=mcm.movie_id where mcm.cast_id=" + actor_id ,(err,result)=>{
                        if(err) throw err;
                        response_to_send[0].movies=result;

                        conn.query("select count(genre_id) as count_movie,genre_id,genre_name from movie_genre_mapping mgm INNER JOIN movie mv on mgm.movie_id =mv.movie_id INNER JOIN movie_cast_mapping mcm on mv.movie_id = mcm.movie_id where mcm.cast_id="+ actor_id+" GROUP by genre_id ORDER  BY count_movie DESC" ,(err,result)=>{
                            if(err) throw err;
                            response_to_send[0].genres_percentage=result;

                            res.send(response_to_send)    
                        });        
    
                    });        
                }else
                res.send(response_to_send);
            });
})

router.use("/list",list);
router.use("/movie",movie);
router.use("/search",search);

module.exports = router;