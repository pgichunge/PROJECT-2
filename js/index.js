function getAkanName() {
    var yearOfBirth = document.getElementById("year-input").value;
    var monthOfBirth = Number(document.getElementById("month-input").value);
    var dayOfBirth = Number(document.getElementById("day-input").value);

    var genders = document.getElementsByName("gender");

    // function to get gender
    function getGender() {
        for (let gender of genders) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }

    var myGenderValue = getGender();

    console.log(myGenderValue);

    // validation functions
    function monthValidator() {
        if (monthOfBirth < 1 || monthOfBirth > 12) {
            return false;
        } else {
            return true;
        }
    }

    function dayValidator() {
        if (monthOfBirth === 2 && Number(yearOfBirth) % 4 === 0) {
            if (dayOfBirth > 28 || dayOfBirth < 1) {
                return false;
            } else if (monthOfBirth === 2 && dayOfBirth > 29) {
                return false;
            } else if (monthOfBirth === 2 && dayOfBirth < 1) {
                return false;
            } else {
                return true;
            }
        } else if (dayOfBirth < 1 || dayOfBirth > 31) {
            return false;
        } else {
            return true;
        }
    }

    var monthValid = monthValidator();
    var dayValid = dayValidator();
    var dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0, 2)) / 4) - 2 * Number(yearOfBirth.slice(0, 2)) - 1) +
        ((5 * Number(yearOfBirth.slice(2, 4)) / 4)) + ((26 * (monthOfBirth + 1) / 10)) + dayOfBirth) % 7);

    var maleAkanNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];

    var femaleAkanNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];

    if (myGenderValue == "male" && monthValid && dayValid) {
        switch (dayOfWeekNumber) {
            case 1:
                document.getElementById('result').textContent = "Wow! You are a Sunday baby: your Akan name is " + maleAkanNames[0];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 2:
                document.getElementById('result').textContent = "Wow! You are a Monday baby: your Akan name is " + maleAkanNames[1];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 3:
                document.getElementById('result').textContent = "Wow! You are a Tuesday baby: your Akan name is " + maleAkanNames[2];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 4:
                document.getElementById('result').textContent = "Wow! You are a Wednesday baby: your Akan name is " + maleAkanNames[3];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 5:
                document.getElementById('result').textContent = "Wow! You are a Thursday baby: your Akan name is " + maleAkanNames[4];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 6:
                document.getElementById('result').textContent = "Wow! You are a Friday baby: your Akan name is " + maleAkanNames[5];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 7:
                document.getElementById('result').textContent = "Wow! You are a Saturday baby: your Akan name is " + maleAkanNames[6];
                document.getElementById('display-name').textContent = "See your Akan name heree: ";
                return false;
                break;
            case 0:
                document.getElementById('result').textContent = "Wow! You are a Sunday baby: your Akan name is " + maleAkanNames[0];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            default:
                alert("ouch! No name for you");

        }
    } else if (myGenderValue == "female" && monthValid && dayValid) {
        switch (dayOfWeekNumber) {
            case 1:
                document.getElementById('result').textContent = "Wow! You are a Sunday baby: your Akan name is" + femaleAkanNames[0];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 2:
                document.getElementById('result').textContent = "Wow! You are a Monday baby: your Akan name is " + femaleAkanNames[1];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                alert("Kwadwo");
                break;
            case 3:
                document.getElementById('result').textContent = "Wow! You are a Tuesday baby: your Akan name is " + femaleAkanNames[2];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 4:
                document.getElementById('result').textContent = "Wow! You are a Wednesday baby: your Akan name is " + femaleAkanNames[3];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 5:
                document.getElementById('result').textContent = "Wow! You are a Thursday baby: your Akan name is " + femaleAkanNames[4];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 6:
                document.getElementById('result').textContent = "Wow! You are a Friday baby: your Akan name is " + femaleAkanNames[5];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 7:
                document.getElementById('result').textContent = "Wow! You are a Saturday baby: your Akan name is " + femaleAkanNames[6];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            case 0:
                document.getElementById('result').textContent = "Wow! You are a Sunday baby: your Akan name is " + femaleAkanNames[0];
                document.getElementById('display-name').textContent = "See your Akan name here: ";
                return false;
                break;
            default:
                alert("ouch! No name for you");
        }
    } else {
        alert("Invalid month or day");
    }
}