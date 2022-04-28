require("./db/connection");
const yargs = require("yargs");
const { addMovie } = require("./movie/method");

const app = async (yargsObj) => {
    try{
        if (yargsObj.add) {
            // add movie function: takes yargs --add terminal input
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
            console.log(`Successfully added ${yargsObj.title}`);
        } else if (yargsObj.list) {
            // list movies funciton: takes --list 

        } else if (yargsObj.update) {
            // update movies function: takes --update terminal input 

        } else if (yargsObj.delete){
            // delete movie function: takes --delete terminal input

        } else {
            console.log("incorrect input")
        }
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);