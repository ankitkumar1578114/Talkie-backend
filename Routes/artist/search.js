const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

router.get("/:name",(req,res)=>{

    const name = req.params.name;
    console.log("name")
    conn.query("Select * from artist where name like '%"+name+"%'  Limit 10 ",(err,result)=>{
                if(err) throw err;
                res.send(result)
    });

})

module.exports = router;