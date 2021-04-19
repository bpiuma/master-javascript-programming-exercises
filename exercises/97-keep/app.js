// Write your function here
function keep (array, k){
    array2 = [];
    for (i in array){
        if (array[i] === k){
            array2.push(k);
        }
    }
    return array2;
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]