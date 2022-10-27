const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

const cast = require("./cast")
const list = require("./list")
const crew = require("./crew")
const search = require("./search")
const create = require("./create")

router.get("/:id",(req,res)=>{
    var movie_id = req.params.id;
    var response_to_send = []
    conn.query("Select * from movie where id=" + movie_id,(err,result)=>{
                if(err) throw err;
                response_to_send=result;
                
                var movie_id2= result[0].movie_id
                
                conn.query("Select mv.original_title,art.*,mcm.character_name from movie mv INNER JOIN movie_cast_mapping mcm on mv.movie_id = mcm.movie_id INNER JOIN artist art on mcm.cast_id=art.actor_id where mv.movie_id = " + movie_id2,(err,result)=>{    
                    if(err) throw err;
    
                    response_to_send[0].casts=result;

                    conn.query("SELECT * FROM post_tag_mapping ptm INNER JOIN post p on p.id= ptm.post_id where ptm.tag_entity_id='"+movie_id+"'",(err,result)=>{
                        if(err) throw err;
                        response_to_send[0].posts=result;

                        conn.query("SELECT mv.id,mgm.* FROM movie mv INNER JOIN movie_genre_mapping mgm on mv.movie_id = mgm.movie_id WHERE mgm.movie_id = "+movie_id2,(err,result)=>{
                            if(err) throw err;
                            response_to_send[0].genres=result;

                            res.send(response_to_send)
                        });        
                   
                    }); 

                });    
    });
})

router.use("/crew",crew);
router.use("/cast",cast);
router.use("/list",list);
router.use("/search",search);
router.use("/create",create)

module.exports = router;