// Write your function here
function computeAverageOfNumbers (array){
    if (array.length == 0) {
        return 0;       
    } else {
        suma=0;
        cantidad=0;
        for (i in array){
            suma += array[i];
            cantidad++
        }
        return suma/cantidad;
    }
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3