 import { readdir } from 'node:fs/promises'
let args = process.argv[2]
let dir = await readdir(args)
let arrnames = []
 dir.map((dirs) => {
    let name = dirs.slice(0, dirs.indexOf('.json'))
    arrnames.push(name.split('_'))
})
 
let lastnamefirs = []
let count=1
 arrnames.map((names) => {
    lastnamefirs.push(names[1]+' '+names[0])
    
})
lastnamefirs.sort()
lastnamefirs.map((ele)=>{
    console.log(count+'. '+ele);
    count++
  }) 