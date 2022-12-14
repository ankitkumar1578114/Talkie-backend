const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

    router.get("/:id",(req,res)=>{

        const offset = req.params.id;
        
        conn.query("Select *,YEAR(release_date) as release_year from movie ORDER BY popularity desc Limit 15 OFFSET  "+offset,(err,result)=>{
                    if(err) throw err;
                    // console.log(result);
                    res.send(result)

        });    
    })

    router.get("/released/:id",(req,res)=>{

        const newDate = new Date();

        const date= newDate.getDate();
        const month = newDate.getMonth()+1;
        conn.query("SELECT *,YEAR(release_date) as release_year from movie where month(release_date) = "+month +" and day(release_date) = "+date,(err,result)=>{
                    if(err) throw err;  
                    // console.log(result);
                    res.send(result)

        });
    })

    router.get("/lang/:lang",(req,res)=>{

        const offset = 0;
        const lang=req.params.lang;
        
        conn.query("Select *,YEAR(release_date) as release_year from movie where original_language = '"+lang+"' Order by popularity desc Limit 10 OFFSET "+offset,(err,result)=>{
                    if(err) throw err;  
                    // console.log(result);
                    res.send(result)
        });

    });

    router.get("/upcoming/:id",(req,res)=>{

        const offset = 0;
        const lang=req.params.lang;
        
        conn.query("Select * from upcoming_movie order by id desc LIMIT 10",(err,result)=>{
                    if(err) throw err;  
                    // console.log(result);
                    res.send(result)

        });    
        })





module.exports = router;