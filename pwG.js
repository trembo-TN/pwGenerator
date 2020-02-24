var generateBtn = document.querySelector("#submit");
var useLowercase = document.querySelector("#useLowercase");
var useUppercase = document.querySelector("#useUppercase");
var useNumbers = document.querySelector("#useNumbers");
var useSpecial = document.querySelector("#useSpecial");
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "~!@#$%^&*+_";
var totalCharacters = document.querySelector("#characters");
var content = document.querySelector("#content");

generateBtn.addEventListener("click", function(e) {
    e.preventDefault();
    var availableCharacters = "";
    if (useLowercase.checked) {
        availableCharacters = availableCharacters + letters;
    }
    if (useUppercase.checked) {
        availableCharacters = availableCharacters + letters.toUpperCase
    }
    if (useNumbers.checked) {
        availableCharacters = availableCharacters + numbers;
    }
    if (useSpecial.checked) {
        availableCharacters = availableCharacters + special;
    }

    var length = availableCharacters.length;

    var password = "";
    for (var i = 0; i < totalCharacters.value; i++) {
        var random = Math.floor(Math.random() * length);
        password = password + availableCharacters[random];
    }
    content.value = password;
});