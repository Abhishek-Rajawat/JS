let fs= require("fs")
let path=require("path")
let types=require( "./utility")

function organizeFn(dirPath){
    let destPath
    if(dirPath==undefined)
    dirPath=process.cwd()
    else{
        let doesExist=fs.existsSync(dirPath)
        if(doesExist){

            let destPath=path.join(dirPath,"organised files")
            if(fs.existsSync(destPath)==false){
                console.log(destPath)
                fs.mkdirSync(destPath)


            }
            
        }
        else
        console.log("Please enter corrrect path")
    }
    
    destPath=path.join(dirPath,"organised files")
    organizeHelper(dirPath,destPath)


}
function organizeHelper(src,dest){
    let childName=fs.readdirSync(src)

    for(let i=0;i<childName.length;i++)
    {
        let childAdress=path.join(src,childName[i])

        let isFile=fs.lstatSync(childAdress).isFile()
        
        if(isFile){
           let fileExt= path.extname(path.basename(childAdress))
           fileExt=fileExt.slice(1) 
           
           let category=getCategory(fileExt)

           sendfiles(childAdress,dest,category)

        }
    }


}

function sendfiles(srcfilePath,dest,category){


    let categoryPath=path.join(dest,category)
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath)
    }
    let filename=path.basename(srcfilePath)
    let destFilePath=path.join(categoryPath,filename)
    fs.copyFileSync(srcfilePath,destFilePath)
    fs.unlinkSync(srcfilePath)
    console.log(filename," moved to category ",category)
}

function getCategory(name){
   
    for(let type in types.utility){
        let ctypeArray=types.utility[type]
        for(let i=0;i<ctypeArray.length;i++){
            if(ctypeArray[i]==name){
                return type
                
            }
        }
    }
    return "others"

}

module.exports={
    organizeKey:organizeFn
}