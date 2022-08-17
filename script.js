// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInteger(min,max){
  return Math.floor(Math.random()*(max - min) +min)

}

function getRandomItem(list){
  return list[randomInteger(0, list.length - 1)]
}

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

  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var symbolList = ["!","@","#","$","%","^","&", "*","(",")","_","-"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = []

  var userOptions = []

  

  for (var i = 0; i < lowercase.length; i++){
    uppercase[i] = lowercase[i].toUpperCase()
  }

  if(userWantsNumbers){
    userOptions.push(numberList)
  }

  if(userWantsSymbols){
    userOptions.push(symbolList)
  }

  if(userWantsLcase){
    userOptions.push(lowercase)
  }

  if(userWantsUcase){
    userOptions.push(uppercase)
  }

  var newPassword = ""

  for (var i = 0; i < pwordLength; i++) {
    var randomList = getRandomItem(userOptions)
    var randomCharacter = getRandomItem(randomList)
    console.log(randomCharacter)
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
