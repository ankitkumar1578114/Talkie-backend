const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();

//this is for shuffling the searches
const shuffle = (array)=> {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))            
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}
    

router.get("/:search_item",(req,res)=>{
    const search = req.params.search_item.toLowerCase();

    var responseToSend

    conn.query("Select *,'Movie' AS entity_type from movie where LOWER(title) LIKE '%" + search +"%' LIMIT 5",(err,result)=>{
                if(err) throw err;
                // console.log(result);
                responseToSend=result;
                // res.send(result)
                conn.query("Select *,'Artist' AS entity_type from artist where LOWER(name) LIKE '%" + search +"%' LIMIT 5",(err,result)=>{
                    if(err) throw err;
                    responseToSend.push(...result);
                    shuffle(responseToSend)
                    res.send(responseToSend)
                })
            
    });
})
    
module.exports = router;