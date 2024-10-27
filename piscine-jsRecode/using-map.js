function citiesOnly(obj) {
    let arr = []
    obj.map((c) => {
        arr.push(c.city)
    })
    return arr
}

console.log(
    citiesOnly([
        {
            city: 'Los Angeles',
            temperature: '  101 °F   ',
        },
        {
            city: 'San Francisco',
            temperature: ' 84 ° F   ',
        },
    ]))
