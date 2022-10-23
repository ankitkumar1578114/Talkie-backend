const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();
const movie = require("./movie")
const list = require("./list")
router.get("/:id",(req,res)=>{
    const actor_id = req.params.id;
    conn.query("Select * from artist where actor_id=" + actor_id,(err,result)=>{
                if(err) throw err;
                res.send(result)

    });
})

router.use("/list",list);
router.use("/movie",movie)

module.exports = router;