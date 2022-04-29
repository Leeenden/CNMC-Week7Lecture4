const Movie = require("./model");

// add movie function
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
// list one movie function
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
        };

    } catch (error) {
        console.log(error);
    }
};

// ---------------------------- Linden's attempt at update ----------------------
// update movie function
exports.updateMovie = async (movieObj) => {
    try {
        await Movie.updateOne(
            { title: movieObj.title },
            { title: movieObj.newTitle, actor: movieObj.newActor }
        ) 
    } catch (error) {
        console.log(error)
    }
};
//=============================================================================

// --------------------------- Robins code block -----------------------------
// exports.updateMovie = async ( oldEntry, newEntry, entryType ) => {
//     try {
//         if (entryType == "title") {
//             await Movie.updateOne(
//                 { title: oldEntry },
//                 { title: newEntry }
//             );
//             return `The ${entryType} of ${oldEntry} updated to ${newEntry}`;
//         } else if (entryType == "actor") {
//             await Movie.updateOne(
//                 { actor: oldEntry },
//                 { actor: newEntry }
//             );
//             return `The ${entryType} of ${oldEntry} updated to ${newEntry}`;
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };
//=============================================================================

//delete movie function
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
