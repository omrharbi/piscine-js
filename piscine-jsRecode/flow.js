function flow(funcs) {
    return function (...args) {
        console.log(...args);
        
        let c = funcs[0](...args)
        for (let index = 1; index < funcs.length; index++) {
            let g = funcs[index](c)
            return g
        }

    }
}

const square = (nbr) => nbr * nbr
const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

flow([add2Numbers, square])(2,3)
// flowedFunctions(2, 3) // -> 25