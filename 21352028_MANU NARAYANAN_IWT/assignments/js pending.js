// AJAX code to check input field values when onblur event triggerd.
function validate(field, query) {
    var xmlhttp;
    if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    } else { // for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState != 4 && xmlhttp.status == 200) {
    document.getElementById(field).innerHTML = "Validating..";
    } else if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    document.getElementById(field).innerHTML = xmlhttp.responseText;
    } else {
    document.getElementById(field).innerHTML = "Error Occurred. <a href='index.php'>Reload Or Try Again</a> the page.";
    }
    }
    xmlhttp.open("GET", "validation.php?field=" + field + "&query=" + query, false);
    xmlhttp.send();
    }var reg = document.getElementById("reg");
    var name = document.getElementById("name");
    var email1 = document.getElementById("email1");
    var email2 = document.getElementById("email2");
    var mob = document.getElementById("mob");
    //Check All Values/Informations Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
    //if (username1.innerHTML == 'Must be 3+ letters' || password1.innerHTML == 'Password too short' || email1.innerHTML == 'Invalid email' || website1.innerHTML == 'Invalid website') {
    alert("Fill Valid Information");
  //  } else {
    //Submit Form When All values are valid.
    