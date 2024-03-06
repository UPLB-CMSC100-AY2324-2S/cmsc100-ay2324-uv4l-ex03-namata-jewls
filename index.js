// CMSC 100 UV-4L | Exercise 3
// @author: Julius Christian I. Namata | 2022-02219
// Description: Checks password validity and match

// this function checks if two passwords match and follow specific formats 
function validatePassword(password1, password2){
    // flags for format
    var hasUppercase = 0;
    var hasLowercase = 0;
    var hasNumber = 0;
    if (password1 == password2){ // check equality of password
        if (password1.length >= 8){ // check if password has correct length
            for(var i = 0; i<password1.length; i++){ 
                if (parseInt(password1[i])){
                    hasNumber = 1;
                }else if (password1[i].toUpperCase() == password1[i]){
                    hasUppercase = 1;
                }else if (password1[i].toLowerCase() == password1[i]){
                    hasLowercase = 1;
                }
                if(hasLowercase && hasNumber && hasUppercase){ // check if password follows the format
                    console.log("Password is correct.");
                    return reversePassword(password1);
                }
            }
            console.log("Password must have at least 1 number, 1 uppercase character, and 1 lowercase character!");
        }else{
            console.log("Password must be at least 8 characters!");
        }
    }else{
        console.log("Passwords do not match!");
    }
    return password1
}

// this function reverses a password
function reversePassword(password){
    var newPassword = "";
    for (var i = password.length-1; i>=0; i--){
        newPassword = newPassword + password[i];
    }
    return newPassword;
}

// this function returns an object that has a name and a newPassword
// password is reversed, if password input is correct and valid
function storePassword(name, password1, password2){
    const newPassword = {
        name: name,
        newPassword: validatePassword(password1, password2)
    }
    return newPassword
}

const username = "Forrest Gump"
const password1 = "RunRunRunx12345"
const password2 = "RunRunRunx12345"

console.log(storePassword(username, password1, password2));