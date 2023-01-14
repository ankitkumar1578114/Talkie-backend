/* Simple Hello World in Node.js */



var s="aaaaaabbaaaaaaaaaccccccccccde";
var arr={};

function max(a,b){
    if(a>b)
    return a;
    return b;
}

for(var i='a';i<='z';i++){
    arr[i]=0;
}

function func(){
    var n=s.length;
    var ct=1;
    for(var i=1;i<n;i++){
        if(s[i]==s[i-1]) {
        ct++;
        }else{
            arr[s[i-1]]=max(arr[s[i-1]],ct);
            ct=1;
            // console.log(arr[s[i-1]],s[i-1],s[i-1]);
        }      
    }    
    arr[s[n-1]-'a']=max(arr[s[n-1]],ct);
    for(var i='a';i<='z';i++){
    console.log(i,arr[i]);
    }
}

func();



// // Importing mysql and csvtojson packages
// // Requiring module
// const csvtojson = require('csvtojson');
// const mysql = require("mysql");

// // Database credentials
// const hostname = "localhost",
// 	username = "root",
// 	password = "",
// 	databsename = "movie_dataset"


// // Establish connection to the database
// let con = mysql.createConnection({
// 	host: hostname,
// 	user: username,
// 	password: password,
// 	database: databsename,
// });

// con.connect((err) => {
// 	if (err) return console.error(
// 			'error: ' + err.message);
//     importCSV();
// });

// // CSV file name
// const fileName = "../../movie_dataset/credits.csv";
// function importCSV(){
//     console.log(fileName)

//     csvtojson().fromFile(fileName).then(source => {

//         // Fetching the data from each row
//         // and inserting to the table "sample"
//         var n=source.length;
//         var i=3230;
//         setInterval(()=>{
//             i++;
//             console.log(i)
//             try{
//             var movie=source[i].cast;
//             movie=movie.replace(/{'/g,`{"`);
//             movie=movie.replace(/':/g,`":`);
//             movie=movie.replace(/, '/g,`, "`);
//             movie=movie.replace(/',/g,`",`);
//             movie=movie.replace(/'}/g,`"}`);
//             movie=movie.replace(/: '/g,`: "`);
//             movie=movie.replace(/None/g,`null`);
            
//             // for(var j=0;j<movie.length;j++)
//             // {
//             //     if(movie[j]==`'`)
//             //     movie[j]=`"`;
//             // }
//             // console.log(movie)
//             var actors =JSON.parse(movie);
//             // console.log(actors);

//             // console.log("___________");
//             var m=actors.length;
//             var movie_id=source[i].id;
//             for(var j=0;j<m;j++){
//                 var actor=actors[j];
//                 // console.log(actor)
//                 var actor_id = actor.id
//                 var charecter = actor.character
//                 // console.log(source);
//                 var insertStatement =
//                 `UPDATE movie_cast_mapping SET character_name = ? where movie_id =`+movie_id+" and cast_id = "+actor_id;
//                 var items = [charecter];
//                 console.log(items);
//                 // console.log("___________");/
//                 con.query(insertStatement, items,
//                     (err, results, fields) => {
//                     if (err) {
//                         console.log(
//             "Unable to insert item at row ", i + 1);
//                         return console.log(err);
//                     }
//                     console.log(items)
//                 });  
//             }
//             // console.log(items)
//             // Inserting data of current row
//             // into database
          
//             }
//             catch(err){
//                 console.log(err)
//             }          
//         },100)

//         console.log(
//     "All items stored into database successfully");
//     });    
// }