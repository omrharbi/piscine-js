import { readdir} from 'node:fs/promises';
const args= process.argv[2]
const files = await readdir(args);
console.log(files.length );
