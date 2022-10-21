// Importing mysql and csvtojson packages
// Requiring module
const csvtojson = require('csvtojson');
const mysql = require("mysql");

// Database credentials
const hostname = "localhost",
	username = "root",
	password = "",
	databsename = "movie_dataset"


// Establish connection to the database
let con = mysql.createConnection({
	host: hostname,
	user: username,
	password: password,
	database: databsename,
});

con.connect((err) => {
	if (err) return console.error(
			'error: ' + err.message);
    importCSV();
});

// CSV file name
const fileName = "../movie_dataset/credits.csv";
function importCSV(){
    console.log(fileName)

    csvtojson().fromFile(fileName).then(source => {

        // Fetching the data from each row
        // and inserting to the table "sample"
        for (var i = 0; i < source.length; i++) {
            var Name = source[i]["Name"],
                Email = source[i]["Email"],
                Age = source[i]["Age"],
                City = source[i]["City"]
                console.log(source);
        //     var insertStatement =
        //     `INSERT INTO sample values(?, ?, ?, ?)`;
        //     var items = [Name, Email, Age, City];
    
        //     // Inserting data of current row
        //     // into database
        //     con.query(insertStatement, items,
        //         (err, results, fields) => {
        //         if (err) {
        //             console.log(
        // "Unable to insert item at row ", i + 1);
        //             return console.log(err);
        //         }
        //     });
        }
        console.log(
    "All items stored into database successfully");
    });    
}
