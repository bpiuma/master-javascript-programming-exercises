// Write your function here
function addToBackOfNew (array, elem){
    var array2=[];
    for (i in array) {
        array2.push(array[i]);
    }
    array2.push(elem);
    return (array2);
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]