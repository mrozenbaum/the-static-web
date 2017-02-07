
console.log("JavaScript Loops");

/*Increment by 10*/
for (var i = 5; i <= 120; i += 10) {
	console.log("Current value is", i);
};

for (var x = 0; x < 10; x++){
	console.log(x);
}
/*Decrement by division*/
for (var i = 4096; i >= 1; i = i / 2) {
	console.log("Current value is", i);
};

/*Array iteration*/
var presidents = ["Bush", "Obama", "Clinton", "Washington", "Lincolin"];
for (var i = 0; i < presidents.length; i += 1) {
	console.log("Some of the U.S President: " + presidents[i]);
}



/*Object iteration using for-in loops*/
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
for (var key in antSpecies) {
	console.log('antSpecies' + key, '=', antSpecies[key]);
}

