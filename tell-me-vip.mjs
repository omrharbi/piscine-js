import { writeFile } from 'node:fs/promises';
import { readFile, readdir } from 'node:fs/promises'

let args = process.argv[2]
let jsonfiles = [];
try {
    let read = await readdir(args)
    for (let re in read) {
        let files = await readFile(args + '/' + read[re], 'utf8')
         if (JSON.parse(files).answer === "yes") {
            let name = read[re].slice(0, read[re].indexOf('.json'))

            jsonfiles.push(name.split('_'))
        }
    }

    let lastnamefirs = []
    let count = 1
    jsonfiles.map((names) => {
        lastnamefirs.push(names[1] + ' ' + names[0])

    })
    lastnamefirs.sort()
let arr=[]
    lastnamefirs.map((ele) => {
       arr.push(count + '. ' + ele)
        count++
         
     })
     
    writeFile("vip.txt",arr.join('\n'))

} catch (error) {
    console.log(error);
}//