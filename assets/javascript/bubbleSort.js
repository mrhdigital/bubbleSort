//alert("Hello");

var arrayUnsorted = [45, 50, 23, 2];
var arrayUnsortedCopy = (arrayUnsorted.slice(0, arrayUnsorted.length));

function bubbleSort(arr) {

    var sorted = false
    while (!sorted) {
        sorted = true;
        // // console.log(sorted);
         for (var i = 0; i < 3; i++) {
            // console.log(i);
            if (arr[i] > arr[i + 1]) {
                sorted = false;
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


// document.getElementById("sortedArray").innerHTML = arrayUnsorted;

var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function() {
  // Get the sorted array, insert its contents into the #result div
  //var sortedArr = bubbleSort(unsortedArr);
  document.querySelector("#unsortedArray").innerText = arrayUnsortedCopy.join(", ");
});
// document.querySelector("#unsortedArray").innerText = arrayUnsorted;
// SortArray = bubbleSort(arrayUnsorted);
// console.log(arrayUnsorted);

var sortBtn = document.querySelector("#sort");

sortBtn.addEventListener("click", function() {
  // Get the sorted array, insert its contents into the #result div
  //var sortedArr = bubbleSort(unsortedArr);
  SortArray = bubbleSort(arrayUnsorted);
  document.querySelector("#sortedArray").innerText = SortArray.join(", ");
});
