// Write your function here
function  getAllElementsButNth (array, ind){
    var array2 = [];
    var aux = 0;
    for (i in array){
        if (aux != ind) {
            array2.push(array[aux]);
        }
        aux++;
    }
    return array2;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']