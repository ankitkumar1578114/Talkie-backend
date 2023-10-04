const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        host:"bud7smgco12prwhvcdqt-mysql.services.clever-cloud.com",        
        user:'ug4opd26a5o0wbnr',
        password:"A8Uqhger5xSXWCreeKM6",
        database:'bud7smgco12prwhvcdqt',
        port: 3306
        // host:"localhost",        
        // user:'root',
        // password:"",
        // database:'movie',

    }

)

conn.connect((err)=>{
    if(err) throw err;
    console.log("Congratulations! Database connected")

})

module.exports = conn;