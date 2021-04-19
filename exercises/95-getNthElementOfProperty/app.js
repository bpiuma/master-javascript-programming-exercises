// Write your function here
function getNthElementOfProperty (obj, key, n){
    if (Array.isArray(obj[key])){
        if (n<=(obj[key].length)){
            return obj[key][n];
        }
    }
}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2