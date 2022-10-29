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
const fileName = "../../movie_dataset/movies_metadata.csv";
function importCSV(){
    console.log(fileName)

    csvtojson().fromFile(fileName).then(source => {

        // Fetching the data from each row
        // and inserting to the table "sample"
        var n=source.length;
        var i=-1;
        setInterval(()=>{
            i++;
            console.log(i)
            try{
            var movie_id = source[i].id;
            var release_date = source[i].release_date;

            var insertStatement =
            "UPDATE movie SET release_date = ? where movie_id ="+movie_id;
            var items = [release_date];
            console.log(items);
            // console.log("___________");/
            con.query(insertStatement, items,
                (err, results, fields) => {
                if (err) {
                    console.log(
        "Unable to insert item at row ", i + 1);
                    return console.log(err);
                }
                console.log(items)
            });  
        }
            catch(err){
                console.log(err)
            }          
        },100)

        console.log(
    "All items stored into database successfully");
    });    
}