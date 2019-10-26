//alert("Hello");


    // window.onload = function() {
    //     what();
    //     function what(){
    //         document.getElementById("whileCounter").innerHTML = "hi";
    //     };
    // }

var arrayUnsorted = [1, 326, 251, 24, 249];
var arrayUnsortedCopy = (arrayUnsorted.slice(0, arrayUnsorted.length));
var whileCounter = 0;

function bubbleSort(arr) {

    var sorted = false
    while (!sorted) {
        sorted = true;
        whileCounter++;
         console.log(whileCounter);
        for (var i = 0; i < arr.length; i++) {
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

startBtn.addEventListener("click", function () {
    // Get the sorted array, insert its contents into the #result div
    //var sortedArr = bubbleSort(unsortedArr);
    document.querySelector("#unsortedArray").innerText = arrayUnsortedCopy.join(", ");
});
// document.querySelector("#unsortedArray").innerText = arrayUnsorted;
// SortArray = bubbleSort(arrayUnsorted);
// console.log(arrayUnsorted);

var sortBtn = document.querySelector("#sort");

sortBtn.addEventListener("click", function () {
    // Get the sorted array, insert its contents into the #result div
    //var sortedArr = bubbleSort(unsortedArr);
    SortArray = bubbleSort(arrayUnsorted);
    document.querySelector("#sortedArray").innerText = SortArray.join(", ");
    document.getElementById("whileCounter").innerHTML = whileCounter;

   



    

});

