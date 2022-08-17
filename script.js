// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var userInput = window.prompt("How long do you want your password to be?")
  var pwordLength = parseInt(userInput)

  if (isNaN(pwordLength)){
    window.alert("That is not a number!")
    return
  }

  if (pwordLength < 8 || pwordLength > 128){
    window.alert("Password length must be between 8 and 128 characters")
    return
  }

  var userWantsNumbers = window.confirm("Would you like numbers in your password")
  var userWantsSymbols = window.confirm("Would you like symbols in your password")
  var userWantsLcase = window.confirm("Would you like lowercase letters in your password")
  var userWantsUcase = window.confirm("Would you like uppercase letters in your password")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
