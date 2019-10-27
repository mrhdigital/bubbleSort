//alert("Hello");


var arrayUnsorted = [11,21,81,51,2];
// create the copy of arrayUnsorted so content of the array will not change when "arrayUnsorted is sorted"
var arrayUnsortedCopy = (arrayUnsorted.slice(0, arrayUnsorted.length));


// Global variables for counters
var whileCounter = 0;
var ifCounter = 0;
var forCounter = 0;
// create function bubbleSort that accept array as parameter.
function bubbleSort(arr) {
    // create var sorted that will act as a flag to let us know if our array has been completely sorted.
    var sorted = false
    while (!sorted) {
        sorted = true;
        whileCounter++;
        console.log(whileCounter);
        // Loop through the array
        for (var i = 0; i < arr.length; i++) {
            forCounter++;
            // console.log(i);
            // if the current element is larger than the next element, swap them and set sorted to "false"
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
    // If we looped through the array without having to swap anything, exit the while loop and return the array.
    return arr;

}

// Get a reference to the unsorted array button in he DOM, add a click event listener to it
var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function () {
    // insert the contents of the "arrayUnsortedCopy" into the span with id = #unsortedArray
    document.querySelector("#unsortedArray").innerText = arrayUnsortedCopy.join(", ");
});

// Get a reference to the sorted array button in he DOM, add a click event listener to it
var sortBtn = document.querySelector("#sort");

sortBtn.addEventListener("click", function () {
    // call function bubbleSort and pass arguement arrayUnsorted and store the result in a variable SortArray
    SortArray = bubbleSort(arrayUnsorted);
    // insert the contents of the "arrayUnsorted" into the span with id = #sortedArray
    document.querySelector("#sortedArray").innerText = SortArray.join(", ");
    document.getElementById("whileCounter").innerHTML = whileCounter;
    document.getElementById("ifCounter").innerHTML = ifCounter;
    document.getElementById("forCounter").innerHTML = forCounter;

});

