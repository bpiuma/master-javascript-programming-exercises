// Write your function here
function getIndexOf (char, str){
    for (i in str){
        if (str[i] === char){
            return i;
        } 
    }
    return -1;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2