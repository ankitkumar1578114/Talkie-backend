const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

router.get("/:id",(req,res)=>{

    const offset = req.params.id;
    conn.query("Select * from post Limit 4 OFFSET "+offset,(err,result)=>{
                if(err) throw err;
                res.send(result)
    });

})

module.exports = router;