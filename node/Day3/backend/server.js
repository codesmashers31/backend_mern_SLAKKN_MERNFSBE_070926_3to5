

import path from 'path'
import fs from 'fs'
import os from 'os'
const filePath = path.resolve("nodeclass")

console.log('filePath',filePath);


const folderPath = path.join(filePath,"index.txt")

console.log('folderPath',folderPath);


// fs.mkdir(filePath,{recursive:true},()=>{
//     console.log('Folder Succesfully done');
    
// })


const obj = os.platform()




const content = "This is React Process I am Making the Process of Node"

fs.writeFile(folderPath,process.cwd(),()=>{

    console.log('Successfully Done');

})

fs.readFile("folderPath","utf-8",(error,data)=>{

    console.log(data);
    

})


console.log(process);


// const makeFile = async()=>{


// try {

//     const folderCreated =  await fs.mkdir (filePath,{recursive:true})

//     const content = "This is React Process I am Making the Process of Node"

//     await fs.writeFile(folderPath,content,()=>{
//         console.log(`File Created Successfully`);
        
//     })

//      await fs.readFile(folderPath,"utf-8",(error,data)=>{

//         console.log(data);
        

//     })


    
// } catch (error) {


//     console.log(error);
    
    
// }
   




// }

// export default makeFile