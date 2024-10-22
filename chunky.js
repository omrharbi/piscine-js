function chunk(arr,num){
    let newslice=[]
    for(let i=0;i<arr.length;i+=num){
        newslice.push(arr.slice(i,i+num))
    }
    return newslice
}