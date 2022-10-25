const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();
const list = require("./list")
const create = require("./create")

router.get("/:id",(req,res)=>{
    const post_id = req.params.id;
    // conn.query("Select * from crew where crew_id=" + crew_id,(err,result)=>{
    //             if(err) throw err;
    //             // console.log(result);
    //             res.send(result)

    // });
})

router.use("/list",list);
router.use("/create",create)

module.exports = router;