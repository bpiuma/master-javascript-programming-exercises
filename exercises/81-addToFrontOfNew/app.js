// Write your function here
function addToFrontOfNew (array, elem){
    var array2=[];
    for (i in array) {
        array2.push(array[i]);
    }
    array2.unshift(elem);
    return (array2);
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]