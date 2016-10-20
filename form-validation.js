
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;


  function validateUsername()
{
  var userEntered = document.getElementById("user").value;

  //Show message that there is an error with the username...
  if ( userEntered.length < 6 ) {

  document.getElementById("usernameError").innerHTML="Username must contain at least 6 characters.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
              document.getElementById("usernameGroup").classlist.remove("has-success");
  document.getElementById("usernameGroup").classList.add("has-error");
              document.getElementById("usernameGroup").classlist.remove("has-success");
}
  else if (userEntered.indexOf(' ')>0) {

  document.getElementById("usernameError").innerHTML="Username cannot contain ANY spaces.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
              document.getElementById("usernameGroup").classlist.remove("has-success");
  document.getElementById("usernameGroup").classList.add("has-error");
              document.getElementById("usernameGroup").classlist.remove("has-success");

  }
  if ( userEntered.length >= 6)  {
              document.getElementById("usernameGroup").classlist.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
              document.getElementById("usernameGroup").classlist.remove("has-error");
}
  //Show message that there is an error with the password...
}

  function validatePassword()
{
  var passEntered = document.getElementById("pass").value;

  if ( passEntered.match(/password/i)) {

    document.getElementById("passwordError").innerHTML="Password cannot be password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
              document.getElementById("passwordGroup").classlist.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
              document.getElementById("passwordGroup").classlist.remove("has-success");
}
  else if (passEntered == userEntered) {

    document.getElementById("passwordError").innerHTML="Password cannot be the same as username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
              document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
              document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else if (passEntered.length <6) {

    document.getElementById("passwordError").innerHTML="Password must be at least 6 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
              document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
              document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else if (passEntered.length > 20) {

    document.getElementById("passwordError").innerHTML="Password cannot be more than 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
              document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
            document.getElementById("passwordGroup").classList.remove("has-success");

  }

  else  {
              document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");
            document.getElementById("passwordGroup").classList.remove("has-error");
}
}


function register()
{
  alert( "Your username is:" + " " + userEntered + " " + "and your password is:" + " " + passEntered);
}
