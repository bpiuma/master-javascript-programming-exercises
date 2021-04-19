// Write your function here
function select (array, obj){
    var obj2 = new Object();
    var aux;
    for (i in array){
        aux = array[i];
        if (obj.hasOwnProperty(aux)){
            obj2[aux] = obj[aux];
        }
    }
    return obj2;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }