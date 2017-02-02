var userID = "ashley11!"
var password = "ashley11!"
var noErrors = {reason: "Your password and username are valid! You are awesome!" };
var pwtooShort = {reason: "Your password was too short, learn to count"};
var pwspecChar = {reason: "Use either special character, $ or #!"};
var usertooshort = {reason: "Your user name was too short!"};
var userspecChar = {reason: "You dont have $ or #!"};
var string2 = {reason: "Your user name was too short and doesnt have a $ or #!"};

function isUserIdValid(str) {
  // if a string is more than six characters AND includes a # or $, then it's valid
  if (str.length > 6 && (str.includes("#") || str.includes("$"))) {
    alert(noErrors.reason);
  }
// if a string has less than 6 characters AND includes a # or $ then it's not valid
  else if (str.length < 6 && (str.includes("#") || str.includes("$"))) {
    alert(usertooshort.reason);
  }
// if a string has more than six characters AND doesn't have a # or DOES include a $, it's valid
  else if (str.length > 6 && (!str.includes("#") || str.includes("$"))) {
    alert(noErrors.reason);
  }
// if a string has more than six characters AND doesn't have a # AND doesn't have a $, it's not valid
  else if (str.length > 6 && (!str.includes("#") || !str.includes("$"))) {
    alert(userspecChar.reason);
}
//if a string has less than six characters and doesn't have both a # or $.

  else if (str.length < 6 && (!str.includes("#") || !str.includes("$"))) {
    alert(noErrors.reason);
}

// if a string has more than six characters AND has a # OR doesn't have a $, it's valid
  else if (str.length > 6 && (str.includes("#") || !str.includes("$"))) {
    alert(noErrors.reason);
  }
}

function isPasswordValid(str) {if (str.length > 6 && (str.includes("#") || str.includes("$")))
  {return noErrors.valid}
  else {alert(Errors.valid)}
};

function areCredentialsValid(id, pass) { return isUserIdValid(id) && isPasswordValid(pass); }


function getUserCredentials() {
  var id = prompt("Enter user ID");
  var pass = prompt("Enter password");
  if (areCredentialsValid(id, pass)===true){
    alert("Your cred is good!")
  }
  else {
    alert("Your cred is not good.")
  }
  }
