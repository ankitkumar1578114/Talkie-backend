const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

router.get("/:id",(req,res)=>{
    const crew_id = req.params.id;
    conn.query("Select mv.* from movie mv INNER JOIN movie_crew_mapping mcrm ON mv.movie_id=mcrm.movie_id where mcrm.crew_id=" + crew_id ,(err,result)=>{
                if(err) throw err;
                res.send(result)
    });
})

module.exports = router;