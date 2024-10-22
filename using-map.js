function citiesOnly(arr){
    let newarr=[]
     arr.map(row=>newarr.push(row.city))
    return newarr
}
function upperCasingStates(arr){
    let newarr=[]
    let space=/\s/g
    arr.map(f=>{
        if( space.test(f)){
            let sp=f.split(' ')
            let newstr=sp.map(f=>f[0].toUpperCase()+f.slice(1))
            newarr.push(newstr.join(' '))
        }else{
            newarr.push(f[0].toUpperCase()+f.slice(1))
        }
    })
return newarr
}

function fahrenheitToCelsius(array){
   let f=array.map(c=>Math.floor((parseFloat(c)-32)*(5/9))+"°C" )
   return f
}

function trimTemp(obj){
    obj.map(c=>{
        let f=c.temperature.split(" ").join('')
        c.temperature=f;
    })
   return obj
}
function tempForecasts(arr){
   return arr.map((obj)=>{
         obj.temperature=   fahrenheitToCelsius([obj.temperature]).join('')+"elsius";
         obj.state=upperCasingStates([obj.state]).join("")
         return `${obj.temperature} in ${obj.city}, ${obj.state}`
    }) 

} ;