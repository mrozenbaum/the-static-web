// output-target is div ID in HTML
var output = document.getElementById("output-target");
// tempField is ID of input are in HTML
var userTemp = document.getElementById("tempField").value;
// button type ID in HTML
var button = document.getElementById("converter");

var tempInput = document.getElementById("tempField");

// conversion will begin when "submit" button has been pressed
button.addEventListener("click", determineConverter);

// This function should determine which conversion should
// happend based on which radio button is selected.
tempInput.addEventListener("keypress", pressed);
function pressed(e) {
console.log("event", e);	
if (e.keyCode === 13) { // key 13 = enter key on keyboard
	determineConverter(e);
	}
}


// This function determines which conversion should be made 
function determineConverter(clickEvent) {
	var userTemp = document.getElementById("tempField").value

	if (document.getElementById('c').checked) {
		toCelsius(userTemp);
	} else if (document.getElementById('f').checked) {
		toFahrenheit(userTemp);
	} else {
		alert("Please choose Fahrenheit or Celsius");
	}
} 
// function to convert to 'c'
function toCelsius (userTemp) {
	finalTemp =	Math.ceil(((userTemp * 9) / 5) + 32);
// colors for different temps
	if (finalTemp <= 0) {
		output.innerHTML = `<p style="color:blue">${finalTemp}</p>`;
	} else if (finalTemp >= 32) {
		output.innerHTML = `<p style="color:red">${finalTemp}</p>`;
	} else {
		output.innerHTML = `<p style="color:green">${finalTemp}</p>`;
	}
}
// function to convert to 'f'
function toFahrenheit (userTemp) {
	finalTemp = Math.ceil(((userTemp - 32) * 5) / 9);
// colors for different temps
	if (finalTemp <= 32) {
			output.innerHTML = `<p style="color:blue">${finalTemp}</p>`;
	} else if (finalTemp >= 90) {
		output.innerHTML = `<p style="color:red">${finalTemp}</p>`;
	} else {
		output.innerHTML = `<p style="color:green">${finalTemp}</p>`;
	}
}
// clear button for reset
var clearText = document.getElementById("clear").addEventListener("click", function (event) {
	tempField.value = "";
	outputTarget.innerHTML = "";
	document.getElementById('c').checked = false;
	document.getElementById('f').checked = false;
});


