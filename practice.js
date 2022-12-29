var countPositives = 0; // provides the sum of positive # in the array
var arr = [3, 4, -2, 7, 16, -8, 0];
    
for (var i=0; i<arr.length; i++) {
    if (arr[i] >= 0) {
        countPositives += 1;
        console.log(arr[i]);
    }
}
    
console.log("there are " + countPositives + " positive values");
