function countLeapYears(date){
    let c=0
    let da=new Date(date).getFullYear()
    for( let i =1;i<da;i++){
        if(i%4==0 &&i%100!=0||(i % 400 == 0)){
            c++
        }
    }
    return c
}
console.log(countLeapYears(new Date('1664-08-09')));
