function get(arg,arg2){
    return arg2.split('.').reduce((c,t)=>c &&c[t],arg)
}