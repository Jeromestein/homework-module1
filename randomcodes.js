/* ------ RANDOM CODES ------ */

function generateCode() {
    var code = ''; 
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%'; 
    
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length); 
        code += str.charAt(char); 
    }
    return code; 
}

// Get HTML element to display
document.getElementById("codes").innerHTML = generateCode(); // display generated code

// Disable Button
function disableButton() {
    document.getElementById("submit").disabled = true; 
}

disableButton(); 