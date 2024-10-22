import { readFile ,writeFile} from 'node:fs/promises'
import { Buffer } from 'node:buffer';
 const file = process.argv[2]
const args2 = process.argv[3]
const args3 = process.argv[4]

let readfile = await readFile(file,'utf8')

if(args2==='encode'){
    let name="cypher.txt"
    if(args3){
        name=args3
    }
    let s = Buffer.from(readfile).toString('base64');
    writeFile(name,s)
}else if(args2==='decode'){
    let name="clear.txt"
    if(args3){
        name=args3
    }
    let decode = Buffer.from(readfile, 'base64')
    let decodedString = decode.toString("utf8");
     writeFile(name,decodedString)
}
 
