// Write your function here
function countAllCharacters (str){
    if (str==="") {
        return [];
    } else {
        var obj = new Object();
        for (i in str){
            if (obj.hasOwnProperty([str[i]])){
                obj[str[i]] = obj[str[i]] + 1;
            } else {
                obj[str[i]] = 1;
            }
        }
        return obj;
    }
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}