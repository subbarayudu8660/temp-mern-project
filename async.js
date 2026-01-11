const {readFile,writeFile} = require("node:fs");
const util = require("util")
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./text.txt')
//     .then((result) =>console.log(result))
//     .catch((err)=>console.log(err))

const start = async() =>{
    try{
        const first = await readFilePromise("./text.txt","utf8");
        const second = await readFilePromise("./test.txt","utf8");
        await writeFilePromise("./writer.txt",`this is hard oof,but awesome:${first} ${second} `)
        console.log(first,second)
    }catch(error){
        console.log(error)
    }
}

start();