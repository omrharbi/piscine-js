let mercury = 0.2408467
let venus = 0.61519726
let mars = 1.8808158
let jupiter = 11.862615
let saturn = 29.447498
let uranus = 84.016846
let neptune = 164.79132
let earth = 31557600
const dogYears=(name, age)=> {
	if (name === "earth") {
        return +(age / (earth / 7)).toFixed(2)
    }
    if (name === "mercury") {
        return +(age / (mercury * earth / 7)).toFixed(2)
    }
    if (name === "venus") {
        return +(age / (venus * earth / 7)).toFixed(2)
    }
    if (name === "mars") {
        return +(age / (mars * earth / 7)).toFixed(2)
    }

    if (name === "jupiter") {
        return +(age / (jupiter * earth / 7)).toFixed(2)
    }
    if (name === "saturn") {
        return +(age / (saturn * earth / 7)).toFixed(2)
    }
    if (name === "uranus") {
        return +(age / (uranus * earth / 7)).toFixed(2)
    }
    if (name === "neptune") {
        return +(age / (neptune * earth / 7)).toFixed(2)
    }
};