function hasCity(country ,city){
    return function (cit){
        if(city.includes(cit)){
            return `${cit} is a city from ${country}`  
        }
        return `${cit} is not a city from ${country}` 
    }
}