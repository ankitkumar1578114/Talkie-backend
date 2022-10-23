const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

router.get("/:id",(req,res)=>{

    const offset = req.params.id;
    
    conn.query("Select * from crew Limit 10 OFFSET "+offset,(err,result)=>{
                if(err) throw err;
                // console.log(result);
                res.send(result)

    });

})


module.exports = router;