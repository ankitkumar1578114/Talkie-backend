const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

router.get("/:id",(req,res)=>{

    const offset = req.params.id;
    
    conn.query("Select * from movie Limit 15 OFFSET "+offset,(err,result)=>{
                if(err) throw err;
                // console.log(result);
                res.send(result)

    });

})

router.get("/lang/:lang",(req,res)=>{

    const offset = 0;
    const lang=req.params.lang;
    
    conn.query("Select * from movie where original_language = '"+lang+"' Limit 10 OFFSET "+offset,(err,result)=>{
                if(err) throw err;
                // console.log(result);
                res.send(result)

    });

})


module.exports = router;