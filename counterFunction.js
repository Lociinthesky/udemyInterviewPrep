function myFunc() {
	let count = 0;
	return function() {
		count++
		return count;
	}
}

const instanceOf = myFunc();

instanceOf()
instanceOf()
instanceOf()