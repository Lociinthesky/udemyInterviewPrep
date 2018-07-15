function getTotal(...args){
  var num1 = args[0];
  if ( args.length === 1 ) {
  	return function(x) {
  		return x + num1;
  	}
  }
  return num1 + args[1]
}


//getTotal(10, 20)
//getTotal(10)(20)