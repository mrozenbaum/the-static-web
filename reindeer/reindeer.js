
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

// Gets the <div> element that we want to insert reindeer strings into
var hohohoElement = document.getElementById("coloredReindeer");
var i;

// Loop through array
for (var i = 0; i < reindeer.length; i += 1) {
	hohohoElement.innerHTML = hohohoElement.innerHTML + colors [i] + " " reindeer[i] + "<br>";		
}

