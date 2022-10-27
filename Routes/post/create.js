const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

router.post("/:id",(req,res)=>{
    var body_data= req.body; 

    var post_type = body_data.post_type
    var title = body_data.title;
    var post_img_url = body_data.img_url;
    var body = body_data.body;
    var tags = body_data.tag;
    // console.log(body_data)
    var post_id;
    conn.query("INSERT INTO post (post_type,title,post_img_url,body) values (?,?,?,?)",[post_type,title,post_img_url,body],(err,result)=>{
                if(err) throw err;
                post_id=result.insertId;
                // console.log(post_id)
                for(var i=0; i<tags.length;i++){
                    var tag=tags[i];
                    conn.query("INSERT INTO post_tag_mapping (tag_type,tag_entity_id,tag_entity_name,post_id) values (?,?,?,?)",[tag.type,tag.id,tag.name,post_id],(err,result)=>{
                                if(err) throw err;

                    });
                }
                res.send({"status":"post is created"});
            });        
})  

module.exports = router;