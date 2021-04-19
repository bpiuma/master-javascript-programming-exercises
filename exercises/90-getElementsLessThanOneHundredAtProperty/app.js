// Write your function here
function getElementsLessThan100AtProperty (obj, key){
    if ((!Array.isArray(obj[key])) || (obj[key]==null)){
        return [];
    } else {
        var aux = [];
        for (i in obj[key]) {
            if (obj[key][i] < 100){
                aux.push(obj[key][i]);
            }
        }
        return aux;
    }
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]