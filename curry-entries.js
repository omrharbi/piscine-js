function defaultCurry(obj) {
    return (obj2) => {
        let Objec = {}
        let firstObject = Object.entries(obj)
        firstObject.push(...Object.entries(obj2))
        firstObject.map((x) => Objec[x[0]] = x[1])
        return Objec
    }

}

function mapCurry(func) {
    return (obj) => {
        return Object.fromEntries(Object.entries(obj).map((x) => func(x)))
    }
}

function reduceCurry(func) {
    return (obj, init = '') => {
        return Object.entries(obj).reduce((acc, [key, val]) => {
            return func(acc, [key, val]);
        }, init);
    };
}
function filterCurry(func) {
    return (obj) => {
        let newObjec = {}
        let c = Object.entries(obj)
        c.forEach(([key, val]) => {
            if (func([key, val])) {
                newObjec[key] = val
            }
        })
        return newObjec
    }
}

function reduceScore(obj, init = 0) {
    let total = init
    Object.entries(obj)
        .forEach(([_, val]) => {
            if (val.isForceUser === true) {
                Object.entries(val).forEach(([key, vals]) => {
                    if (key.includes('Score')) {
                        total += vals
                    }
                })
            }
        })
    return total
}

function filterForce(obj){
        let ob={}
     Object.entries(obj).forEach(([keys,val])=>{
        return filterCurry(([key,vals])=>{
                if(key==='shootingScore'){
                  if(vals>=80 &&val.isForceUser === true ){
                    ob[keys]=val
                  }
                }
        })(val)
    })
    return ob
 }

 const mapAverage = mapCurry(([key, val]) => {
    const averageScore = (val.pilotingScore + val.shootingScore) / 2;
    return [key, { ...val, averageScore }];
  });