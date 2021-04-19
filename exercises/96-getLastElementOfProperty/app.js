// Write your function here
function getLastElementOfProperty (obj, key){
    if (Array.isArray(obj[key])){
        var i = (obj[key]).length - 1;
        return obj[key][i];
    }
}

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5