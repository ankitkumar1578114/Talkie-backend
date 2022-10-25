const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

router.post("/:id",(req,res)=>{
    var body_data= req.body; 

    var post_type = body_data.post_type
    var title = body_data.title;
    var post_img_url = body_data.img_url;
    var body = body_data.body;

    conn.query("INSERT INTO post (post_type,title,post_img_url,body) values (?,?,?,?)",[post_type,title,post_img_url,body],(err,result)=>{
                if(err) throw err;
                res.send(result)
    });

})

module.exports = router;