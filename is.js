const is = {}

 is.num=function(num){return typeof(num)==='number'?true:false}
 is.nan=function(nan){return Number.isNaN(nan)}
 is.str=function(str){return typeof(str)==='string'?true:false}
 is.bool=function(bool){return typeof(bool)==='boolean'?true:false}
 is.undef=function(undef){return typeof(undef)==='undefined'?true:false}
 is.def=function(undef){return typeof(undef)!=='undefined'?true:false}
 is.arr=function(arr){return Array.isArray(arr)?true:false}
 is.obj=function(obj){return typeof(obj)==='object' && !Array.isArray(obj) && !is.fun(obj) && obj!==null?true:false}
 is.fun=function(func){return typeof(func)==='function'?true:false}
 is.truthy=function(value){return value}
 is.falsy=function(value){return !value}   

