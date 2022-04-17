let fs= require("fs")
let path=require("path")


function helpFn(dirPath){
    console.log(`
                    List of all the commands:-
                                
                                node main.js tree "directory path"
                                node main.js organize "directory path"
                                node main.js help    
    
    `)


}

module.exports={
    helpKey:helpFn
}