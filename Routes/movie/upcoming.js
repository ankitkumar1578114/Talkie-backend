const { query } = require("express");
const conn =require('../../dbcon');
const router = require("express").Router();


// for storing data in upcoming_movie table which is fetched from tmdb database

router.post("/:id",(req,res)=>{
    var upcoming_movies= req.body.upcoming_movies; 

    // console.log(upcoming_movies)
    
    for(var i=0;i<upcoming_movies.length;i++){
        var upcoming_movie = upcoming_movies[i];
        var title=upcoming_movie.title
        var original_title=upcoming_movie.original_title
        var budget=upcoming_movie.budget
        var google_url=upcoming_movie.poster_path
        var original_language=upcoming_movie.original_language
        var overview=upcoming_movie.overview
        var release_date=upcoming_movie.release_date
        var runtime=upcoming_movie.runtime
        var tagline=upcoming_movie.tagline
        var movie_id = upcoming_movie.id
        var imdb_id = upcoming_movie.imdb_id
        var popularity = upcoming_movie.popularity
        var poster_path = upcoming_movie.poster_path
        var revenue = upcoming_movie.revenue
        var vote_count = upcoming_movie.vote_count

        const promise = new Promise((resolve)=>{
            conn.query("INSERT INTO upcoming_movie (title,movie_id,imdb_id,popularity,poster_path,revenue,vote_count,original_title,budget,google_url,original_language,overview,release_date,runtime,tagline) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [title,movie_id,imdb_id,popularity,poster_path,revenue,vote_count,original_title,budget,google_url,original_language,overview,release_date,runtime,tagline]
            ,(err,result)=>{
                        // if(err) throw err;
                        // res.send(result)
            });
            resolve("solved")
        })
        promise.then(()=>{
            // console.log("resolved")
        })

    }
    res.send("upcoming_movies_created ")
})



module.exports = router;