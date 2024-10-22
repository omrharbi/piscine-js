function interpolation(obj) {
    let x = obj.start;
    let y = 0;
    let i = 0;
    let stepx = (obj.end - obj.start) / obj.step
    let stepy = (obj.duration) / obj.step
     setInterval(() => {
        if(i==obj.step){
            return
        }
         y += stepy         
         obj.callback([x, y])
         x += stepx
         i++
    }, obj.duration / obj.step)
}
