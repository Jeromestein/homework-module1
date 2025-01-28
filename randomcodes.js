/* ------ RANDOM CODES ------ */

// Function to generate combination of characters
function generateCode() {
    // Create variables to store generated codes and the type of characters we want to show as codes
    var code = ''; // initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%'; // character set

    // Generate character multiple times using a loop
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length); // random select a character from the variable
        code += str.charAt(char); // accumulate the generated character into a string of 8 characters
    }
    return code; // return the final accumulated string when loop ends
}

// Get HTML element to display
document.getElementById("codes").innerHTML = generateCode(); // display generated code

// Disable Button
function disableButton() {
    document.getElementById("submit").disabled = true; // disable the submit button
}

// Activate function
disableButton(); 