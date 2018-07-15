function logNumbers() {
	console.log(1);
	setTimeout(function(){console.log(2)}, 1000);
	setTimeout(function(){console.log(3)}, 0); //<- pushed into the event loop, waits...
	console.log(4);
}

logNumbers();

//1
//4 <---- 
//3 <----   
//2

