//getTotal(10, 20)
//getTotal(10)(20)
//Should both work

function getTotal(...args){
  var num1 = args[0];
  if ( args.length === 1 ) {
  	return function(x) {
  		return x + num1;
  	}
  }
  return num1 + args[1]
}

//ALTERNATIVELY:


function getTotal(){
  var args = Array.prototype.slice.call(arguments);

  if ( args.length === 2 ) {
  	return args[0] + args[1];
  }
  else if ( args.length === 1 ) {
  	return function(num2) {
  		return args[0] + num2;
  	}
  }
}

//getTotal(10, 20)
//getTotal(10)(20)