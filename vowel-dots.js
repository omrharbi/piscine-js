const vowels=/aeiou/gi
function vowelDots(str){
     let s=''
 return str.replace(new RegExp(`([${s}])`, 'g'), '$1.')
} 

