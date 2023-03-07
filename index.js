const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];





let passwordLengthInput = document.getElementById("password-length");

let firstInput = document.querySelector(".one");
let secondInput = document.querySelector(".two");


let passwordLength = 15;

function generate() {
let increament = "";
let passwordLength = passwordLengthInput.value;
   
    for(let i =0; i<passwordLength; i++){
        let randomNumber = Math.floor(Math.random()*characters.length);
        increament += characters[randomNumber];
      
    }
    
return increament;

}

function onStart() {
    firstInput.textContent = generate() ;
    secondInput.textContent = generate() ;
}

