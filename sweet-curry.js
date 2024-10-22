function mult2(arg){
    return function(ar1){
       return  arg*ar1
    }
}

function add3(ar1){
    return function(ar2){
        return function (ar3){
            return ar1+ar2+ar3
        }
    }
}

function sub4(ar1){
    return function(ar2){
        return function (ar3){
            return function (ar4){
                return ar1-ar2-ar3-ar4
            }
        }
    }
}