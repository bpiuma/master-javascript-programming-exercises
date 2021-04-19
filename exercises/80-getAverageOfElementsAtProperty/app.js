// Write your function here
function getAverageOfElementsAtProperty (obj, key){
    if (!Array.isArray(obj[key])) {
        return 0;
    } else if ((obj[key]==null) || (obj[key].length===0)) {
        return 0;
    } else {
        var array = obj[key];
        var suma=0;
        var cantidad=0;
        for (ind in array){
            suma = suma + array[ind];
            cantidad++;
        }
        return suma/cantidad;
    }
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

