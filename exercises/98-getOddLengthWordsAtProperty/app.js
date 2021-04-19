// Write your function here
function getOddLengthWordsAtProperty (obj, key){
    var array = [];
    if (Array.isArray(obj[key])){
        var arr = obj[key].slice();
        for (i in arr){
            if (((arr[i].length)%2-1) == 0){
                array.push(arr[i]);
            }
        }
    }
    return array;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
