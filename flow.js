

function flow(funcs){
    return function (...arg) {
        let rs = funcs[0](...arg);
        for (let i=1;i<funcs.length;i++){
            rs = funcs[i](rs);
        }
        return rs
    }

}
