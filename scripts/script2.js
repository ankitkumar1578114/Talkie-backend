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
            var movie=source[i].genres;
            movie=movie.replace(/{'/g,`{"`);
            movie=movie.replace(/':/g,`":`);
            movie=movie.replace(/, '/g,`, "`);
            movie=movie.replace(/',/g,`",`);
            movie=movie.replace(/'}/g,`"}`);
            movie=movie.replace(/: '/g,`: "`);
            movie=movie.replace(/None/g,`null`);
            
            // for(var j=0;j<movie.length;j++)
            // {
            //     if(movie[j]==`'`)
            //     movie[j]=`"`;
            // }
            // console.log(movie)
            var actors =JSON.parse(movie);
            // console.log(actors);

            // console.log("___________");
            var m=actors.length;
            var movie_id=source[i].id;
            for(var j=0;j<m;j++){
                var actor=actors[j];
                // console.log(actor)
                var genre_id = actor.id
                var genere_name = actor.name

                // console.log(source);
                var insertStatement =
                `INSERT INTO movie_genre_mapping (movie_id,genre_id,genre_name) values(?,?,?)`;
                var items = [movie_id,genre_id,genere_name];
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
            // console.log(items)
            // Inserting data of current row
            // into database
          
            }
            catch(err){
                console.log(err)
            }          
        },100)

        console.log(
    "All items stored into database successfully");
    });    
}