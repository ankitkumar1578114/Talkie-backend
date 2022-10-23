const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

const cast = require("./cast")
const list = require("./list")
const crew = require("./crew")

router.get("/:id",(req,res)=>{
    const movie_id = req.params.id;
    conn.query("Select * from movie where movie_id=" + movie_id,(err,result)=>{
                if(err) throw err;
                // console.log(result);
                res.send(result)

    });
})

router.use("/crew",crew);
router.use("/cast",cast);
router.use("/list",list);

module.exports = router;