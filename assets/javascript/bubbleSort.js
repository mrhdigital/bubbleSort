//alert("Hello");


var arrayUnsorted = [1, 326, 251, 24, 249];
// create the copy of arrayUnsorted so content of the array will not change when "arrayUnsorted is sorted"
var arrayUnsortedCopy = (arrayUnsorted.slice(0, arrayUnsorted.length));


// Global variables for counters
var whileCounter = 0;
var ifCounter = 0;
var forCounter = 0;
// create function bubbleSort that accept array as parameter.
function bubbleSort(arr) {

    var sorted = false
    while (!sorted) {
        sorted = true;
        whileCounter++;
        console.log(whileCounter);
        for (var i = 0; i < arr.length; i++) {
            forCounter++;
            // console.log(i);
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                ifCounter++;
                // console.log("for");
                var temp = arr[i];
                // console.log(temp);
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                // console.log(arr[i+1]);

            }

        }

    }

    return arr;

}




var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function () {
    
    document.querySelector("#unsortedArray").innerText = arrayUnsortedCopy.join(", ");
});


var sortBtn = document.querySelector("#sort");

sortBtn.addEventListener("click", function () {
    
    SortArray = bubbleSort(arrayUnsorted);
    document.querySelector("#sortedArray").innerText = SortArray.join(", ");
    document.getElementById("whileCounter").innerHTML = whileCounter;
    document.getElementById("ifCounter").innerHTML = ifCounter;
    document.getElementById("forCounter").innerHTML = forCounter;







});

