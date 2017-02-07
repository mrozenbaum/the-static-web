console.log("hello world");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

function stackLetters (alphabetArray) { // parameter
	var stack = ""; // assigning
	for (var i = 0; i < alphabetArray.length; i ++) {
	debugger
		if ( i % 3 === 0 && i > 0) {
			stack += " " + alphabetArray[i]; //assigning and adding
		} else {
		stack += alphabetArray[i];
			console.log(stack);
 	} 
  } 
}
stackLetters(alphabet);


