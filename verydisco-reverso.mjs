import { readFile } from 'node:fs/promises';
var arg = process.argv[2]
let arg1 = ''
let arg2 = ''
let arr = []

try {
    const contents = await readFile(arg, 'utf8');
    let newslice = contents.split(' ')
    newslice.forEach(element => {
        if (element.length % 2 === 0) {
            arg1 = element.slice(0, element.length / 2)
            arg2 = element.slice(element.length / 2)
        } else {
            arg1 = element.slice(0, (element.length / 2))
            arg2 = element.slice((element.length / 2))
        }
        arr.push(arg2 + arg1)
    });
} catch (error) {
    console.log("error", error);
}

console.log(arr.join(' '));