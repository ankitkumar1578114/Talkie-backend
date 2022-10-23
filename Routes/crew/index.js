const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();
const movie = require("./movie")
const list = require("./list")

router.get("/:id",(req,res)=>{
    const crew_id = req.params.id;
    conn.query("Select * from crew where crew_id=" + crew_id,(err,result)=>{
                if(err) throw err;
                // console.log(result);
                res.send(result)

    });
})

router.use("/movie",movie);
router.use("/list",list);


module.exports = router;