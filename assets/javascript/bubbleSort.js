//alert("Hello");

var arraySort = [45, 50, 23, 2];
var SortArray = [];

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

SortArray = bubbleSort(arraySort);
console.log(SortArray);
document.querySelector("#unsortedArray").innerText = arraySort;
document.getElementById("sortedArray").innerHTML = SortArray;