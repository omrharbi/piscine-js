const test =  process.argv[2]
let arg1=''
let arg2=''
let newslice=test.split(' ')
let arr=[]
newslice.forEach(element => {
    if(element.length%2===0){
        arg1=element.slice(0,element.length/2)
        arg2=element.slice(element.length/2)
        
    }else{
        arg1=element.slice(0,(element.length/2)+1)
        arg2=element.slice((element.length/2)+1)
    }
    arr.push(arg2+arg1)
}); 
console.log(arr.join(' '));
