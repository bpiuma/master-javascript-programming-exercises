// Write your function here
function getElementsGreaterThan10AtProperty (obj, key){
    if ((!Array.isArray(obj[key])) || (obj[key]==null)){
        return [];
    } else {
        var aux = [];
        for (i in obj[key]) {
            if (obj[key][i] > 10){
                aux.push(obj[key][i]);
            }
        }
        return aux;
    }
}

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]