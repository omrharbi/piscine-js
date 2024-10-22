function getURL(url){
    let u=/((http:|https:)+[^\s]+[\w])[^\s]*/g
    return url.match(u)
}
function greedyQuery(dataSet){
    let u=/(((http:|https:)+[^\s]+[\w])[^\s]*)[?&]([^&=]+)=([^&=][^\s]*)/g
    return dataSet.match(u)
}