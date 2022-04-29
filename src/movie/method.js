const Movie = require("./model");


exports.addMovie = async (movieObj) => {
    //create one entry in the db
    try {
        //await model create method 
        await Movie.create(movieObj);
        // log the intermmittent message
        console.log("Success, trying to create a new db entry...");
    } catch (error) {
        console.log(error)
    }
};

exports.listOneMovie = async (movieObj) => {
    // find One movie object from db 
    try {
        const listMovie = await Movie.find(movieObj);
        console.log("Attempting to locate movie in the database...");
        //confirm successful filter
        console.log("Success, located movie in the database.");
        // if statement to determine if the movie object array is empty or not (e.g. does your input retur a search)
        if(movieObj.length === 0 ){
        //log to console the filtered object
        console.log("Here's the movie you searched for: ");
        console.log(listMovie);
        } else {
            console.log("No movies found with the title input. Try again?");
        }
        
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    //delete One movie from the db
    try {
        await Movie.deleteOne(movieObj);
        console.log("Attempting to locate movie in the database...");
        //confirm successful filter
        console.log("Success, located movie in the db.");
        //confirm attempted deletion
        console.log("Attempting to delete movie from the database...");
    } catch (error) {
        console.log(error)
    }
};