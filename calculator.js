function farLeft(CC) {
    return ((CC / 4) - 2 * CC - 1);
}

function middle(YY) {
    return (5 * YY / 4);
}

function farRight(MM) {
    return (26 * (MM + 1) / 10);
}

var birthdayYear = Number(prompt("Which year were you born?"))
var gender = prompt("What is your gender?")

const farLeftResult = farLeft(10)
const farRightResult = farRight(10)
const middleResult = middle(birthdayYear)

var calculationResult = (farLeftResult + middleResult + farRightResult + 10) % 7
const wholeNumber = calculationResult.toPrecision(1);
alert(wholeNumber);

// calculationResult = 2
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const femaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

let result;
if (gender == "male") {
    result = maleNames[wholeNumber]
} else if (gender == "female") {
    result = femaleNames[wholeNumber]
} else {
    alert('Enter a valid gender')
}

alert(`Your day name is ${result}`, )