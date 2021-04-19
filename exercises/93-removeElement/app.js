// Write your function here
function removeElement (array, param){
    var array2 = [];
    //var aux = 0;
    for (i in array){
        if (array[i] != param){
            array2.push(array[i]);
        }
    }
    return array2;
}

var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]