#!/usr/bin/env node
let inputArr=process.argv.slice(2)
let command =inputArr[0];
let helpObj=require("./commands/help")
let treeObj=require("./commands/tree")
let organizeObj=require("./commands/organize")


switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1])
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1])
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Wrong Input")

}



