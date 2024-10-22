function getAcceleration(a){
    if(a.f!==undefined && a.m!==undefined && a.m!==0){
        return (a.f/a.m)
    }
    else if (a.Δv!==undefined && a.Δt!==undefined && a.Δt!==0){
        return (a.Δv/a.Δt)
    }
    else if (a.d!==undefined && a.t!==undefined && a.t!==0){
        return (a.d*2)/(a.t**2)
    }else{
        return "impossible"
    }
}