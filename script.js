
function handleButtonClick() {
    alert('Hello everyone, This is Bhargav Ram! 😊');
    console.log("Button clicked!");
}


const myInteractiveButton = document.getElementById('myButton');


if (myInteractiveButton) {
  
    myInteractiveButton.addEventListener('click', handleButtonClick);
    console.log("JavaScript: Button found and click listener attached successfully!");
} else {
    // If the button was NOT found, log an error to the console
    console.error("JavaScript Error: Could not find the button with ID 'myButton'. Please check your HTML.");
}


console.log("JavaScript file (script.js) has finished loading.");