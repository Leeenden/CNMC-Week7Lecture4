require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, listOneMovie, updateMovie, deleteMovie } = require("./movie/method");
const Movie = require("./movie/model");

const app = async (yargsObj) => {
    try{
        if (yargsObj.add) {
            // add movie function: takes yargs --add terminal input
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
            console.log(`Success, added ${yargsObj.title} to the db. `);
        } else if (yargsObj.list) {
            // list one movie function: takes --list terminal input
            await listOneMovie({title: yargsObj.title});
            console.log("List function completed.");
        } else if (yargsObj.update) {
            // update movies function: takes --update, --newTitle="", --newActor="" = terminal inputs
            await updateMovie(yargsObj)
            console.log(`Success! You have changed ${yargsObj.title} to ${yargsObj.newTitle}`)
        } else if (yargsObj.delete) {
            // delete movie function: takes --delete terminal input
            await deleteMovie({title: yargsObj.title});
            // confirm succesful deletion
            console.log(`Success, deleted ${yargsObj.title}`);
            console.log("Delete function complete.");
        } else {
            console.log("Incorrect input. Try again.")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
        await mongoose.disconnect();
    }
    
};

app(yargs.argv);