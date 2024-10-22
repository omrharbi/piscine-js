function pick(obj, str) {
    let newobj = {}
    Object.entries(obj).forEach(([key,val]) => {
        if (Array.isArray(str)) {
            str.map(c => {
                 if(c===key){
                    newobj[key]=val
                }
            })
        }
        if (typeof str==='string' &&  str===key) {
            newobj[key]=val
        }
    })
   return newobj
}

function omit(obj, str) {
    let newobj = {}
    Object.entries(obj).forEach(([key,val]) => {

        if (!str.includes(key)) {
             newobj[key]=val
        }
        if (typeof str==='string' &&  str!==key) {
            newobj[key]=val
        }
    })
   return newobj
}
let obj =   { drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' }

let num =['grinders', 'saws']
console.log(omit(obj, num));