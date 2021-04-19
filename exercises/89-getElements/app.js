// Write your function here
function getElementsThatEqual10AtProperty (obj, key){
    if ((!Array.isArray(obj[key])) || (obj[key]==null)){
        return [];
    } else {
        var aux = [];
        for (i in obj[key]) {
            if (obj[key][i] == 10){
                aux.push(10);
            }
        }
        return aux;
    }
} 

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]