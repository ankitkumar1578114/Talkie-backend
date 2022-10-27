const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();
const list = require("./list")
const create = require("./create")

router.get("/:id",(req,res)=>{

    const post_id = req.params.id;
    var response_to_send=[];
  
    conn.query("Select * from post where id=" + post_id,(err,result)=>{

                if(err) throw err;
                response_to_send=result;
                if(result.length!=0){
                    conn.query("Select * from post_tag_mapping where post_id=" + post_id,(err,result)=>{
                        if(err) throw err;                    
                        response_to_send[0].tags=result;
                        res.send(response_to_send)
    
                    });                
                }else
                res.send(result);
            
    });    
 
})

router.use("/list",list);
router.use("/create",create)

module.exports = router;