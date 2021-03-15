exports.min = function min (array) {
    if (typeof array != 'object') {return 0} else{ 
        var min = array[0];
    if (typeof min == 'undefined'){return 0} else{
        for(i = 0, l = array.length; i < l; i++){
            if(array[i] < min) min = array[i];
        }      
    return min;
}}
}

exports.max = function max (array) {
    if (typeof array != 'object') {return 0} else{
        var max = array[0];
    if (typeof max == 'undefined'){return 0} else{
        for(i = 0, l = array.length; i < l; i++){
            if(array[i] > max) max = array[i];
        }
return max;
}}}

exports.avg = function avg (array) {
    if (typeof array != 'object' || array.length == 0) {return 0} else{
    var result = array.reduce(function(pre, curr){
        if (typeof curr == 'undefined'){return 0} else{
        return pre + curr;}
    }, 0);
        
    return result / array.length;
}}