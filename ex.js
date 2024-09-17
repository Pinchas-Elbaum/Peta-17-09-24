var SumOfArray = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(SumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
