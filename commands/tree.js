let fs= require("fs")
let path=require("path")


function treeFn(dirPath){
    if(dirPath==undefined)
    treeHelper(process.cwd(),"")
    else{
        let doesExist=fs.existsSync(dirPath)
        if(doesExist){
            treeHelper(dirPath,"")
            
        }
        else
        console.log("Please enter corrrect path")
    }
    
}

function treeHelper(dirPath,indent){
    let isFile=fs.lstatSync(dirPath).isFile()
    if(isFile==true){
        console.log(indent+"├─"+path.basename(dirPath))
    }
    else{
        let dirname=path.basename(dirPath)
        console.log(indent+"└─"+dirname)
        let childern=fs.readdirSync(dirPath)
        for(let i=0;i<childern.length;i++){
            let childPath=path.join(dirPath,childern[i])
            treeHelper(childPath,indent+"\t")
        }


    }
}
module.exports={
    treeKey:treeFn
}