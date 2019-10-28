//alert("Hello");

var arrayUnsorted = [1, 326, 251, 24, 249];
// create the copy of arrayUnsorted so content of the array will not change when "arrayUnsorted is sorted"
var arrayUnsortedCopy = (arrayUnsorted.slice(0, arrayUnsorted.length));
var userInputTextArrayCopy =[];
//var userInputTextArrayCopyNum =[];
var userInputTextArray = [];

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
             console.log(i);
            // if the current element is larger than the next element, swap them and set sorted to "false"
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                ifCounter++;
                 console.log("for");
                var temp = arr[i];
                 console.log(temp);
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                 console.log(arr[i+1]);

            }

        }

    }
    // If we looped through the array without having to swap anything, exit the while loop and return the array.
    return arr;

}

// Get a reference to the unsorted array button in he DOM, add a click event listener to it
var startBtn1 = document.querySelector("#start1");

startBtn1.addEventListener("click", function () {
    // insert the contents of the "arrayUnsortedCopy" into the span with id = #unsortedArray
    
    var userInputText = document.getElementById("inputArray").value;
    console.log(userInputText);


    // This code converts the user input text into the arrays of numbers//
    // var result = userInputText.charAt(0);
    // for(var i = 0; i < userInputText.length; i++) {
    //     if ((userInputText.charAt(i+1) === ",") || (userInputText.charAt(i+1) === " ")){
    //         result = result;
    //     }
    //     else {
    //         result = result + userInputText.charAt(i+1);

    //         // convert the result which is string into an interger(whole number) by using parseInt() method
    //         result = parseInt(result, 10);
    //     }
    //         if((userInputText.charAt(i+1) === ",")  || (userInputText.charAt(i+1) === "")) {
    //             userInputTextArray.push(result);
    //             result = "";
    //         }
   // ****************************************************//
   // The above code was replaced with the following code //
   //******************************************************//

    userInputTextArray =  userInputText.split(',').map(Number).filter(Boolean);
    console.log(userInputTextArray);

              userInputTextArrayCopy = ( userInputTextArray.slice(0,  userInputTextArray.length));
              SortArray = bubbleSort(userInputTextArrayCopy)
              // insert the contents of the "arrayUnsorted" into the span with id = #sortedArray
              document.querySelector("#sortedArray").innerText = SortArray.join(", ");
              document.getElementById("whileCounter").innerHTML = whileCounter;
              document.getElementById("ifCounter").innerHTML = ifCounter;
              document.getElementById("forCounter").innerHTML = forCounter;

            }); 




// Get a reference to the sorted array button in he DOM, add a click event listener to it
var sortBtn = document.querySelector("#sort");

sortBtn.addEventListener("click", function () {
    // call function bubbleSort and pass arguement arrayUnsorted and store the result in a variable SortArray
    SortArray = bubbleSort(userInputTextArrayCopy)
    // insert the contents of the "arrayUnsorted" into the span with id = #sortedArray
    document.querySelector("#sortedArray").innerText = SortArray.join(", ");
    document.getElementById("whileCounter").innerHTML = whileCounter;
    document.getElementById("ifCounter").innerHTML = ifCounter;
    document.getElementById("forCounter").innerHTML = forCounter + "," + userInputTextArray[0] 
    + "," + userInputTextArray[1] + "," + userInputTextArray[2] ;

});

