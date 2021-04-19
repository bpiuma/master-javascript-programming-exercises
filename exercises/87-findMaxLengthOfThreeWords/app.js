// Write your function here
// Write your function here
function findMaxLengthOfThreeWords (w1, w2, w3){
    var l1 = w1.length;
    var l2 = w2.length;
    var l3 = w3.length;
    if ((l1>=l2) && (l1>=l3)){
        return l1;
    }
    if ((l2>=l1) && (l2>=l3)){
        return l2;
    }
    if ((l3>=l1) && (l3>=l2)){
        return l3;
    }
}