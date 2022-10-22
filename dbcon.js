const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        host:"localhost",
        user:'root',
        password:"",
        database:'movie_dataset'
    }

)

conn.connect((err)=>{
    if(err) throw err;
    console.log("Congratulations! Database connected")

})

module.exports = conn;