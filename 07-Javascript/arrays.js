var numbers = [];

var input = prompt("Gimme a number");
while(input != 'stop'){
    ???? parseInt(input) //put that in numbers
    input = prompt("Gimme a number");
}
var sum = 0;
for(var i = 0; i < ????; i++){
  ????????   //increase sum by the "i-th" element of the array
}

alert("Your sum is:" + sum);
    // <input id="x"/>
//stuff down here is for the next step
var inputElement = document.getElementById("x") //replace someID with a string that is the id of your input
var inputValue = inputElement.value; //gets what the user typed into inputElement
inputElement.value = ""; //resets the input
    
//take your code that's in the while loop, and instead put it in a function
// that you call with an onclick on your button