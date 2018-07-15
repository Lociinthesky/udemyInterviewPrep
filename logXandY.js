(function() {
	//'use strict'
	var x = y = 200;
})();

// under the hood, 
//y = 200 is being declared as a global variable WITHOUT the var keyword.
//then, var x = y, which is happening inside of the IIFE, inaccessible in global.
console.log(`y: ${y}`)
console.log(`x: ${x}`);

//'use strict' can fix this bc it forces us to use best practices