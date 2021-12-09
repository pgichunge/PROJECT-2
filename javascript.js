//calculating the akanname which depends on the day of the week born
// formula given  
//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
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
//calculatin results is 2
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const femaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]




// gather user input for
const birthdaybox=document.getElementbyid("birthdate")
const birthmonthbox=document.getElementbyid("birthmonth")
const birthyearbox=document.getElementbyid("birthyear")
const birthgenderbox=document.getElementbyid("gender")

 
//get the elements value
const birthday=birthdatebox.value;
const birthmonth=birthdaymonthbox.value;
const birthyear=birthyearbox.value;
const birthgender=birthgenderbox.value;


console.log(birthday,birthmonth,birthyear,birthgender,)

//to define  the gender
const allgendersarrays=["male","female"]
if (allgendersarrays.includes[birthgender]){
    console.log("continue here")
//defining century and year

const centuryvar=string (birthyear).substring[0,2]
const yearvar=string (birthyear).substring[2]
console.log(century,year)
let result;
if (gender == "male") {
    result = maleNames[wholeNumber]
} else if (gender == "female") {
    result = femaleNames[wholeNumber]
} else {
    alert('Enter a valid gender')
}

alert(`Your day name is ${result}`, )
    
}
else{
    alert("please enter either male or female in the genderbox")

}
