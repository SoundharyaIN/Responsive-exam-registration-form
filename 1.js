function FirstName(){ //function for the validation of the first name
	var field=document.getElementById("a").value;
	var regex=/^[A-Za-z]{3}$/;
if (regex.test(field))
	document.getElementById("kirthi1").innerHTML;
else
	document.getElementById("kirthi1").innerHTML="Please enter your name";
}
function LastName(){ //function for the validation of the last name
	var field=document.getElementById("b").value;
	var regex=/^[A-Za-z]{1}$/;
if (regex.test(field))
	document.getElementById("kirthi2").innerHTML;
else
	document.getElementById("kirthi2").innerHTML="Please enter your last name";
}

function Country(){ //function for the validation of the country
	var field=document.getElementById("c").value;
	var regex=/^[A-Za-z]{4}$/;
if (regex.test(field))
	document.getElementById("kirthi3").innerHTML;
else
	document.getElementById("kirthi3").innerHTML="Enter the correct country name";
}

function Email(str) //function for the validation of the e-mail address
{
    var a = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!a.test(str))
    alert("Please enter a valid email address");
}